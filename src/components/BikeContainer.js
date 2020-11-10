import styled from 'styled-components/macro'

const BikeContainer = ({ bikes }) => {
  return (
    <section>
      {bikes.map((bike) => {
        return (
          <Container key={bike.id}>
            <h4>{bike.brand}</h4>
            <ul>
              {bike.components.map((component, index) => {
                return (
                  <div key={index}>
                    {index === 0 && <h5>Components:</h5>}
                    <li>{component.brand}</li>
                  </div>
                )
              })}
            </ul>
          </Container>
        )
      })}
    </section>
  )
}

export default BikeContainer

const Container = styled.div`
  background: var(--primary);
  border-radius: 3px;
  margin: 1rem 0;
  padding: 1rem 2rem;
`
