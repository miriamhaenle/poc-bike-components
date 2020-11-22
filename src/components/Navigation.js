import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import component from '../assets/component.svg'
import wheel from '../assets/wheel.svg'

export default function Navigation() {
  return (
    <Nav>
      <NavIcon exact to="/" activeClassName="selected">
        <img src={wheel} alt="home" />
        Home
      </NavIcon>
      <NavIcon to="/bikes-and-components" activeClassName="selected">
        <img src={component} alt="bikeIcon"></img>Bikes & Components
      </NavIcon>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`

const NavIcon = styled(NavLink)`
  color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;

  &.selected {
    color: var(--highlight);
    img {
      fill: var(--highlight);
    }
  }
  img {
    width: 2rem;
  }
`
