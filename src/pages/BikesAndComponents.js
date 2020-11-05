import { useState } from 'react'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import AddForm from '../components/AddForm'
import { toDomString } from '../services/dateService'
import { createID } from '../services/idService'

export default function BikeAndComponentsPage() {
  let { path } = useRouteMatch()

  const testState = [
    {
      id: 1,
      name: 'Pinarello Dogma F8',
      type: 'Road',
      brand: 'Pinarello',
      purchaseDate: '2018-11-01',
      components: [
        {
          name: 'Campagnolo Super record EPS',
          type: 'Groupset',
          brand: 'campagnolo',
          purchaseDate: toDomString(new Date()),
          notificationDistance: 100,
        },
      ],
    },
    {
      id: 2,
      name: 'Canxon Speedmax',
      type: 'Road',
      brand: 'Canyon',
      purchaseDate: '2019-05-22',
      components: [],
    },
  ]

  const [bikes, setBikes] = useState(testState)
  const [newBike, setNewBike] = useState(getNewBike())

  function addNewBike() {
    setBikes([...bikes, newBike])
    setNewBike(getNewBike())
    console.log(bikes)
  }

  function getNewBike() {
    return {
      id: createID(),
      name: '',
      type: '',
      brand: '',
      purchaseDate: toDomString(new Date()),
      components: [],
    }
  }

  return (
    <main>
      <h2>Bikes and Components</h2>
      <p>Overview of your bikes and components</p>

      <section>
        {bikes.map((bike) => {
          return (
            <div key={bike.id}>
              <h4>{bike.name}</h4>
              <ul>
                {bike.components.map((component, index) => {
                  return (
                    <div key={index}>
                      {index === 0 && <h5>Components:</h5>}
                      <li>{component.name}</li>
                    </div>
                  )
                })}
              </ul>
            </div>
          )
        })}
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
          <AddForm
            title="Add a new bike"
            formFields={[
              {
                label: 'Bike name',
                type: 'text',
                name: 'name',
                value: newBike.name,
                setValue: (val) => setNewBike({ ...newBike, name: val }),
              },
              {
                label: 'Type',
                type: 'text',
                name: 'type',
                value: newBike.type,
                setValue: (val) => setNewBike({ ...newBike, type: val }),
              },
              {
                label: 'Brand',
                type: 'text',
                name: 'brand',
                value: newBike.brand,
                setValue: (val) => setNewBike({ ...newBike, brand: val }),
              },
              {
                label: 'Purchase date',
                type: 'date',
                name: 'purchaseDate',
                value: newBike.purchaseDate,
                setValue: (val) =>
                  setNewBike({ ...newBike, purchaseDate: val }),
              },
            ]}
            submitHandler={addNewBike}
          />
        </Route>
        <Route path={`${path}/add-new-component`}>
          <AddForm title="Add a new bike" />
        </Route>
      </Switch>
    </main>
  )
}
