import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <NavWrapper>
      <span>X</span>
      <NavLink exact to="/" activeClassName="selected">
        Home
      </NavLink>
      <NavLink to="/bikes-and-components" activeClassName="selected">
        Gear
      </NavLink>
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  background: var(--black);
  color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100vh;
  padding-top: 2rem;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  transform: 2s ease;
  width: 100vw;

  span {
    display: block;
    font-size: 3rem;
  }

  a {
    color: var(--white);
    text-decoration: none;
    font-size: 3rem;
  }

  a.selected {
    color: var(--highlight);
  }
`
