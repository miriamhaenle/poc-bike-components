import { useState } from 'react'
import styled from 'styled-components/macro'
import Navigation from './Navigation'
import BurgerMenu from './BurgerMenu'

export default function Header() {
  const [clicked, setClicked] = useState(false)

  return (
    <HeaderWrapper>
      <h1>BIKECOMPONENTS</h1>
      <nav onClick={() => setClicked(!clicked)}>
        {clicked ? <Navigation /> : <BurgerMenu clicked={clicked} />}
      </nav>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background: var(--black);
  color: var(--white);
  margin-bottom: 20px;
  padding: 2rem;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  transition-delay: 0.5s;

  h1 {
    font-weight: 100;
  }
`
