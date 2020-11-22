import styled from 'styled-components/macro'
import Navigation from './Navigation'

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>BIKECOMPONENTS</h1>
      <Navigation />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
`
