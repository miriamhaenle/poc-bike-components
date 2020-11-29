import styled from 'styled-components/macro'
import bike from '../assets/bike.svg'
import Header from '../components/Header'

export default function HomePage() {
  return (
    <>
      <Header />
      <Home>
        <h2> This is home</h2>
        <img src={bike} alt="bike" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ad
          dignissimos alias asperiores nesciunt omnis, exercitationem laborum
          non laudantium fuga?
        </p>
      </Home>
    </>
  )
}

const Home = styled.main`
  display: grid;
  justify-content: center;

  h2 {
    text-align: center;
  }

  img {
    margin: 0 auto;
    width: 50%;
  }

  p {
    padding: 0 4rem;
  }
`
