import styled from 'styled-components/macro'
import BikeAndComponentsPage from './pages/BikesAndComponents'
import Home from './pages/Home'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path="/bikes-and-components" component={BikeAndComponentsPage} />
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default App
