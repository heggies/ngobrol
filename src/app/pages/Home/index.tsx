import React, { useRef, ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { NavBar } from 'app/components/NavBar'
import { PageWrapper } from 'app/components/PageWrapper'
import { Wrapper } from 'app/components/Wrapper'
import { InputWrapper } from 'app/components/InputWrapper'
import { Input } from 'app/components/Input'
import { FormGroup } from 'app/components/FormGroup'
import { FormLabel } from 'app/components/FormLabel'
import { useHistory } from 'react-router-dom'
import { RandomString, RandomUsername } from 'utils/generate'

export function Home() {
  const roomID = useRef('')
  const defaultUsername = RandomUsername()
  const username = useRef(defaultUsername)
  const [isValidRoomID, setIsValidRoomID] = useState(true)
  const history = useHistory()

  const onChangeRoomID = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    const { value } = currentTarget
    if (value.trim().length === 0) {
      roomID.current = value.trim()
      setIsValidRoomID(true)
      return
    }

    const isValid = /^[a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z]$/.test(value)
    setIsValidRoomID(isValid)

    roomID.current = value.trim()
  }

  const onChangeUsername = ({
    currentTarget,
  }: ChangeEvent<HTMLInputElement>) => {
    const { value } = currentTarget
    if (value.trim().length === 0) {
      username.current = defaultUsername
      return
    }

    username.current = value.trim()
  }

  const onJoin = () => {
    if (!isValidRoomID) {
      alert('Invalid room id!')
      return
    }

    if (roomID.current === '') roomID.current = RandomString(4)
    if (username.current === '') username.current = defaultUsername

    history.push(`room/${roomID.current}`, { username: username.current })
  }

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <NavBar />
      <PageWrapper>
        <StyledWrapper>
          <StyledBox>
            <FormGroup>
              <FormLabel>Room ID</FormLabel>
              <InputWrapper>
                <Input
                  type="text"
                  placeholder="ABCD (or any 4 letters)"
                  onChange={onChangeRoomID}
                  isValid={isValidRoomID}
                />
              </InputWrapper>
              <BottomWrapper>
                <UsernameWrapper>
                  <FormLabel>Username</FormLabel>
                  <InputWrapper>
                    <Input
                      type="text"
                      placeholder={defaultUsername}
                      onChange={onChangeUsername}
                    />
                  </InputWrapper>
                </UsernameWrapper>
                <JoinWrapper>
                  <JoinButton onClick={onJoin}>JOIN</JoinButton>
                </JoinWrapper>
              </BottomWrapper>
            </FormGroup>
            <BottomInfo>
              Random value will be used if you left it empty :)
            </BottomInfo>
          </StyledBox>
        </StyledWrapper>
      </PageWrapper>
    </>
  )
}

const StyledBox = styled.div`
  background-color: ${p => p.theme.backgroundVariant};
  max-width: 500px;
  max-height: 250px;
  width: 100%;
  height: 100%;
  padding: 45px;
  border-radius: 10px;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BottomInfo = styled.span`
  color: ${p => p.theme.textSecondary};
  font-size: 16px;
`

const StyledWrapper = styled(Wrapper)`
  justify-content: center;
  align-items: center;
`

const BottomWrapper = styled.div`
  display: flex;
`

const UsernameWrapper = styled.div`
  width: 100%;
  height: 100%;

  flex: 4;
  display: flex;
  flex-direction: column;
`

const JoinWrapper = styled.div`
  margin-left: 0.2em;

  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const JoinButton = styled.div`
  margin-top: 6px;
  height: 43px;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.primary};
  padding: 20px;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`
