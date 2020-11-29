import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const Button = ({ children, background, backgroundHover }) => {
  return (
    <ButtonStyled background={background} backgroundHover={backgroundHover}>
      {children}
    </ButtonStyled>
  )
}
export default Button

Button.propTypes = {
  background: PropTypes.string,
  backgroundHover: PropTypes.string,
}

const ButtonStyled = styled.button`
  background: ${(props) => props.background || 'var(--black)'};
  border: none;
  border-radius: 3px;
  color: var(--white);
  margin: 0 0.25rem;
  padding: 0.5rem 1rem;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${(props) => props.backgroundHover};
    color: var(--white);
  }
`
