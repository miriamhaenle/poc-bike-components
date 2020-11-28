import styled from 'styled-components/macro'

export default function BurgerMenu({ clicked }) {
  return (
    <Menu>
      <span></span>
      <span></span>
      <span></span>
    </Menu>
  )
}

const Menu = styled.div`
  height: 35px;
  position: fixed;
  right: 35px;
  top: 37px;
  width: 25px;

  span {
    background: var(--white);
    display: block;
    height: 2px;
    opacity: ${(props) => (props.clicked ? '0' : '1')};
    position: absolute;
    top: 10px;
    width: 100%;
  }

  span:first-child {
    opacity: ${(props) => (props.clicked ? '0' : '1')};
    top: 5px;
  }

  span:last-child {
    opacity: ${(props) => (props.clicked ? '0' : '1')};
    top: 15px;
  }
`
