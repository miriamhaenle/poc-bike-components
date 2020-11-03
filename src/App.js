import BikeAndComponentsPage from './pages/BikesAndComponents'
import Home from './pages/Home'
import Header from './components/Header'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
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
    </div>
  )
}

export default App
