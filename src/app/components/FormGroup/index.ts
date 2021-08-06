import styled from 'styled-components'
import { FormLabel } from '../FormLabel'

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  ${FormLabel} {
    margin-bottom: 0.25rem;
    margin-left: 0.125rem;
  }
`
