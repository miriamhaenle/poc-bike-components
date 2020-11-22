import styled from 'styled-components/macro'
import BikeAndComponentsPage from './pages/BikesAndComponents'
import Home from './pages/Home'
import Header from './components/Header'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <AppWrapper>
      <Header />
      <main>
        <Switch>
          <Route
            path="/bikes-and-components"
            component={BikeAndComponentsPage}
          />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 75px auto 75px;
  justify-content: center;
`
