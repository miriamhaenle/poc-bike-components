import styled from 'styled-components/macro'
import bike from '../assets/bike.svg'

export default function HomePage() {
  return (
    <HomeStyled>
      <h2> This is home</h2>
      <img src={bike} alt="bike"></img>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ad
        dignissimos alias asperiores nesciunt omnis, exercitationem laborum non
        laudantium fuga?
      </p>
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  display: grid;
  justify-items: center;

  img {
    width: 80%;
  }
`
