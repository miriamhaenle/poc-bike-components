import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>BIKECOMPONENTS</h1>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/bikes-and-components">Bikes & Components</NavLink>
      </nav>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  border-bottom: 3px dotted #b2ffff;

  nav {
    display: flex;
    justify-content: space-around;
  }
`
