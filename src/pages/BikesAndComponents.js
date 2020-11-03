import { useState } from 'react'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import AddNewBikeForm from '../components/AddNewBikeForm'
import AddNewComponentForm from '../components/AddNewComponentForm'

export default function BikeAndComponentsPage() {
  let { path } = useRouteMatch()

  const [bikes, setBikes] = useState(['Pinarello', 'Canyon'])

  function addNewBike(newBike) {
    setBikes([...bikes, newBike])
  }

  return (
    <main>
      <h2>Bikes and Components</h2>
      <p>Overview of your bikes and components</p>

      <section>
        <div>
          <h4>Pinarello F8</h4>
          <ul>
            Components:
            <li>Campagnolo Super record EPS</li>
            <li>Campagnolo Super 12 Speed Chain</li>
            <li>Laufrad Fulcrum Racing 600 (front)</li>
          </ul>
        </div>
        <div>
          <h4>Canyon Speedmax CF SL</h4>
        </div>
        <ul>
          Components:
          <li>Shimano Di2</li>
          <li>Shimano Chain</li>
        </ul>
      </section>

      <section>
        <button>
          <Link to={`${path}/add-new-bike`}>Add a new bike</Link>
        </button>
        <button>
          <Link to={`${path}/add-new-component`}>Add a new component</Link>
        </button>
      </section>

      <Switch>
        <Route path={`${path}/add-new-bike`}>
          <AddNewBikeForm />
        </Route>
        <Route path={`${path}/add-new-component`}>
          <AddNewComponentForm bikes={bikes} />
        </Route>
      </Switch>
    </main>
  )
}
