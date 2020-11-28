import { Route, Switch } from 'react-router-dom'
import BikeAndComponentsPage from './pages/BikesAndComponents'
import Home from './pages/Home'

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
