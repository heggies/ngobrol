import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { Redirect, useLocation, useParams } from 'react-router-dom'
import firestore from 'utils/firebase'
import { NavBar } from 'app/components/NavBar'
import { PageWrapper } from 'app/components/PageWrapper'
import { Message } from 'types/Message'
import { uuid } from 'utils/generate'

export function ChatRoom() {
  const { id } = useParams<{ id: string }>()
  const locationState = useLocation<{ username: string }>().state
  const [messages, setMessages] = useState<Message[]>([])
  const message = useRef('')
  const messageBox = useRef<HTMLTextAreaElement | null>()
  const chatBox = useRef<HTMLDivElement | null>()

  useEffect(() => {
    firestore
      .collection('chats')
      .doc(id)
      .collection('messages')
      .onSnapshot(doc => {
        let listenedMessages: Message[] = doc.docChanges().map(each => {
          const {
            created_at,
            username,
            message,
            id: messageID,
          } = each.doc.data()
          return {
            id: messageID,
            created_at,
            username,
            message,
          }
        })

        setMessages(m => [...m, ...listenedMessages])
      })
  }, [id])

  useEffect(() => {
    chatBox.current?.scrollTo(0, chatBox.current.scrollHeight)
  })

  const onChangeMessage = ({
    currentTarget,
  }: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = currentTarget

    message.current = value
  }

  const onSend = () => {
    if (message.current.trim() === '') {
      alert('message cannot be empty')
      return
    }

    const messageObject: Message = {
      id: uuid(),
      created_at: Math.floor(Date.now() / 1000),
      message: message.current,
      username: locationState.username,
    }

    firestore
      .collection('chats')
      .doc(id)
      .collection('messages')
      .add(messageObject)
      .then(() => {
        message.current = ''
        messageBox.current && (messageBox.current.value = '')
      })
  }

  const renderMessages = useMemo(
    () =>
      messages.map(message => (
        <ChatWrapper key={message.id}>
          <Chat>
            <Username>{message.username} :</Username>
            <MessageWrapper>{message.message}</MessageWrapper>
          </Chat>
          <MessageTime>
            {new Date(message.created_at * 1000).toLocaleDateString('id-ID', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </MessageTime>
        </ChatWrapper>
      )),
    [messages],
  )

  return !(locationState === undefined || locationState.username === '') ? (
    <>
      <Helmet>
        <title>
          {locationState.username}@{id}
        </title>
      </Helmet>
      <NavBar />
      <PageWrapper>
        <StyledWrapper>
          <ChatBox ref={e => (chatBox.current = e)}>{renderMessages}</ChatBox>
          <MessageBox>
            <MessageTextArea
              onChange={onChangeMessage}
              ref={e => (messageBox.current = e)}
            />
            <MessageSendButton onClick={onSend}>SEND</MessageSendButton>
          </MessageBox>
        </StyledWrapper>
      </PageWrapper>
    </>
  ) : (
    <Redirect to="/home" />
  )
}

const StyledWrapper = styled.div`
  width: 100%;
  height: 98%;
  margin-top: 0.2em;

  display: flex;
  flex-direction: column;
`

const ChatBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.backgroundVariant};
  padding: 10px 20px;
  border-radius: 10px;
  overflow-y: scroll;
  margin-bottom: 0.5em;

  display: flex;
  flex-direction: column;
  flex: 4;
`

const MessageBox = styled.div`
  width: 100%;
  height: 100%;
  color: ${p => p.theme.text};

  flex: 1;
  display: flex;
  align-items: center;
`

const MessageTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  margin-right: 1em;

  flex: 5;
`

const MessageSendButton = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.primary};
  border-radius: 10px;
  cursor: pointer;

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ChatWrapper = styled.div`
  margin-bottom: 20px;

  display: flex;
  align-items: center;
`

const Chat = styled.div`
  flex: 4;

  display: flex;
  flex-direction: column;
`

const Username = styled.span`
  color: ${p => p.theme.text};
  margin-bottom: 0.2em;
`

const MessageWrapper = styled.span`
  background-color: #5e5555;
  color: ${p => p.theme.text};
  padding: 10px;
  border-radius: 10px;
`

const MessageTime = styled.span`
  color: ${p => p.theme.text};
  margin-left: 20px;
`
