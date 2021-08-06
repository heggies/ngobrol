import * as React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { NavBar } from 'app/components/NavBar'
import { PageWrapper } from 'app/components/PageWrapper'

export function ChatRoom() {
  const { id } = useParams<{ id: string }>()

  return (
    <>
      <Helmet>
        <title>{id}</title>
      </Helmet>
      <NavBar />
      <PageWrapper>
        <StyledWrapper>
          <ChatBox>
            <ChatWrapper>
              <Chat>
                <Username>heggies :</Username>
                <Message>
                  Odio fugit accusantium cum hic pariatur iste. Ut possimus
                  voluptates omnis. Et vero soluta illum. Ullam rerum iure odit
                  numquam dolores. Veniam sit nam est quia consequuntur est
                  blanditiis. Aperiam nisi ut iste eveniet et quis sit. Rerum
                  voluptatem ex exercitationem provident. Reiciendis fugit fugit
                  rerum dolorem et amet ad. Doloribus consectetur ea labore
                  nulla dolorum error dolor quod. Est quia eligendi nemo nemo.
                  Voluptas unde quia molestiae. Ex nostrum et nemo impedit
                  doloremque non ad. Sint similique vero quidem quo cumque
                  corporis. Et consequatur voluptatem beatae rerum. Error
                  aliquam doloremque accusantium fugiat deserunt reprehenderit
                  excepturi. Aut accusamus deleniti et reiciendis. Voluptatem
                  iusto ut in facere dolorem labore. Ullam voluptatem aut quia a
                  dolor molestiae. Quaerat qui id nostrum ipsum fugiat. Non
                  voluptas dolorum ex optio non facere dolor omnis. Voluptas
                  laborum maxime voluptatem excepturi esse eveniet. Ullam ipsa
                  aut dolorem deleniti quas voluptatem consequatur. Vel sint aut
                  aspernatur maiores aut ut.
                </Message>
              </Chat>
              <MessageTime>7/12/11, 6:08 AM</MessageTime>
            </ChatWrapper>
            <ChatWrapper>
              <Chat>
                <Username>heggies :</Username>
                <Message>
                  Odio fugit accusantium cum hic pariatur iste. Ut possimus
                  voluptates omnis. Et vero soluta illum. Ullam rerum iure odit
                  numquam dolores. Veniam sit nam est quia consequuntur est
                  blanditiis. Aperiam nisi ut iste eveniet et quis sit. Rerum
                  voluptatem ex exercitationem provident. Reiciendis fugit fugit
                  rerum dolorem et amet ad. Doloribus consectetur ea labore
                  nulla dolorum error dolor quod. Est quia eligendi nemo nemo.
                  Voluptas unde quia molestiae. Ex nostrum et nemo impedit
                  doloremque non ad. Sint similique vero quidem quo cumque
                  corporis. Et consequatur voluptatem beatae rerum. Error
                  aliquam doloremque accusantium fugiat deserunt reprehenderit
                  excepturi. Aut accusamus deleniti et reiciendis. Voluptatem
                  iusto ut in facere dolorem labore. Ullam voluptatem aut quia a
                  dolor molestiae. Quaerat qui id nostrum ipsum fugiat. Non
                  voluptas dolorum ex optio non facere dolor omnis. Voluptas
                  laborum maxime voluptatem excepturi esse eveniet. Ullam ipsa
                  aut dolorem deleniti quas voluptatem consequatur. Vel sint aut
                  aspernatur maiores aut ut.
                </Message>
              </Chat>
              <MessageTime>7/12/11, 6:08 AM</MessageTime>
            </ChatWrapper>
            <ChatWrapper>
              <Chat>
                <Username>heggies :</Username>
                <Message>
                  Odio fugit accusantium cum hic pariatur iste. Ut possimus
                  voluptates omnis. Et vero soluta illum. Ullam rerum iure odit
                  numquam dolores. Veniam sit nam est quia consequuntur est
                  blanditiis. Aperiam nisi ut iste eveniet et quis sit. Rerum
                  voluptatem ex exercitationem provident. Reiciendis fugit fugit
                  rerum dolorem et amet ad. Doloribus consectetur ea labore
                  nulla dolorum error dolor quod. Est quia eligendi nemo nemo.
                  Voluptas unde quia molestiae. Ex nostrum et nemo impedit
                  doloremque non ad. Sint similique vero quidem quo cumque
                  corporis. Et consequatur voluptatem beatae rerum. Error
                  aliquam doloremque accusantium fugiat deserunt reprehenderit
                  excepturi. Aut accusamus deleniti et reiciendis. Voluptatem
                  iusto ut in facere dolorem labore. Ullam voluptatem aut quia a
                  dolor molestiae. Quaerat qui id nostrum ipsum fugiat. Non
                  voluptas dolorum ex optio non facere dolor omnis. Voluptas
                  laborum maxime voluptatem excepturi esse eveniet. Ullam ipsa
                  aut dolorem deleniti quas voluptatem consequatur. Vel sint aut
                  aspernatur maiores aut ut.
                </Message>
              </Chat>
              <MessageTime>7/12/11, 6:08 AM</MessageTime>
            </ChatWrapper>
            <ChatWrapper>
              <Chat>
                <Username>heggies :</Username>
                <Message>
                  Odio fugit accusantium cum hic pariatur iste. Ut possimus
                  voluptates omnis. Et vero soluta illum. Ullam rerum iure odit
                  numquam dolores. Veniam sit nam est quia consequuntur est
                  blanditiis. Aperiam nisi ut iste eveniet et quis sit. Rerum
                  voluptatem ex exercitationem provident. Reiciendis fugit fugit
                  rerum dolorem et amet ad. Doloribus consectetur ea labore
                  nulla dolorum error dolor quod. Est quia eligendi nemo nemo.
                  Voluptas unde quia molestiae. Ex nostrum et nemo impedit
                  doloremque non ad. Sint similique vero quidem quo cumque
                  corporis. Et consequatur voluptatem beatae rerum. Error
                  aliquam doloremque accusantium fugiat deserunt reprehenderit
                  excepturi. Aut accusamus deleniti et reiciendis. Voluptatem
                  iusto ut in facere dolorem labore. Ullam voluptatem aut quia a
                  dolor molestiae. Quaerat qui id nostrum ipsum fugiat. Non
                  voluptas dolorum ex optio non facere dolor omnis. Voluptas
                  laborum maxime voluptatem excepturi esse eveniet. Ullam ipsa
                  aut dolorem deleniti quas voluptatem consequatur. Vel sint aut
                  aspernatur maiores aut ut.
                </Message>
              </Chat>
              <MessageTime>7/12/11, 6:08 AM</MessageTime>
            </ChatWrapper>
            <ChatWrapper>
              <Chat>
                <Username>heggies :</Username>
                <Message>
                  Odio fugit accusantium cum hic pariatur iste. Ut possimus
                  voluptates omnis. Et vero soluta illum. Ullam rerum iure odit
                  numquam dolores. Veniam sit nam est quia consequuntur est
                  blanditiis. Aperiam nisi ut iste eveniet et quis sit. Rerum
                  voluptatem ex exercitationem provident. Reiciendis fugit fugit
                  rerum dolorem et amet ad. Doloribus consectetur ea labore
                  nulla dolorum error dolor quod. Est quia eligendi nemo nemo.
                  Voluptas unde quia molestiae. Ex nostrum et nemo impedit
                  doloremque non ad. Sint similique vero quidem quo cumque
                  corporis. Et consequatur voluptatem beatae rerum. Error
                  aliquam doloremque accusantium fugiat deserunt reprehenderit
                  excepturi. Aut accusamus deleniti et reiciendis. Voluptatem
                  iusto ut in facere dolorem labore. Ullam voluptatem aut quia a
                  dolor molestiae. Quaerat qui id nostrum ipsum fugiat. Non
                  voluptas dolorum ex optio non facere dolor omnis. Voluptas
                  laborum maxime voluptatem excepturi esse eveniet. Ullam ipsa
                  aut dolorem deleniti quas voluptatem consequatur. Vel sint aut
                  aspernatur maiores aut ut.
                </Message>
              </Chat>
              <MessageTime>7/12/11, 6:08 AM</MessageTime>
            </ChatWrapper>
          </ChatBox>
        </StyledWrapper>
      </PageWrapper>
    </>
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

  display: flex;
  flex-direction: column;
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

const Message = styled.span`
  background-color: #5e5555;
  color: ${p => p.theme.text};
  padding: 10px;
  border-radius: 10px;
`

const MessageTime = styled.span`
  color: ${p => p.theme.text};
  margin-left: 20px;
`
