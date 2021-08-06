import styled from 'styled-components'
import { Input } from '../Input'

export const InputWrapper = styled.div`
  align-items: center;
  width: 100%;

  ${Input} {
    width: ${100}%;
    margin-bottom: 1em;
  }
`
