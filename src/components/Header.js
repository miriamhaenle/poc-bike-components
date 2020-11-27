import { useState } from 'react'
import styled from 'styled-components/macro'
import Navigation from './Navigation'

export default function Header() {
  const [clicked, setClicked] = useState(false)

  return (
    <HeaderWrapper>
      <h1>BIKECOMPONENTS</h1>
      <nav onClick={() => setClicked(!clicked)}>
        {clicked ? (
          <Navigation active={clicked} />
        ) : (
          <BurgerMenu>
            <span></span>
            <span></span>
            <span></span>
          </BurgerMenu>
        )}
      </nav>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background: var(--black);
  color: var(--white);
  padding: 2rem;
  text-align: center;
  text-transform: uppercase;
`

const BurgerMenu = styled.div`
  height: 35px;
  position: fixed;
  right: 35px;
  top: 37px;
  width: 25px;

  span {
    position: absolute;
    width: 100%;
    background: var(--white);
    height: 2px;
    display: block;
    top: 10px;
  }

  span:first-child {
    top: 5px;
  }

  span:last-child {
    top: 15px;
  }
`
