import styled from 'styled-components/macro'

const Button = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>
}
export default Button

const ButtonStyled = styled.button`
  background: #0a0a0a;
  border: none;
  border-radius: 3px;
  margin: 0 0.25rem;
  padding: 0.5rem 1rem;
  transition: background 0.2s ease-in;

  &:hover {
    background: lightcoral;
  }
`
