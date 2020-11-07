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
      brand: 'Pinarello',
      type: 'Road',
      model: 'Dogma F8',
      purchaseDate: '2018-11-01',
      components: [
        {
          brand: 'Campagnolo',
          type: 'Groupset',
          model: 'Super record EPS',
          purchaseDate: toDomString(new Date()),
          notificationDistance: 100,
        },
      ],
    },
    {
      id: 2,
      brand: 'Canxon ',
      type: 'Road',
      model: 'Speedmax CL',
      purchaseDate: '2019-05-22',
      components: [],
    },
  ]

  const [bikes, setBikes] = useState(testState)
  const [newBike, setNewBike] = useState(getNewBike())
  const [newComponent, setNewComponent] = useState(getNewComponent())

  function addNewBike() {
    setBikes([...bikes, newBike])
    setNewBike(getNewBike())
    console.log(bikes)
  }

  function getNewBike() {
    return {
      id: createID(),
      brand: '',
      type: '',
      model: '',
      purchaseDate: toDomString(new Date()),
      components: [],
    }
  }

  function getNewComponent() {
    return {
      id: createID(),
      brand: '',
      type: '',
      model: '',
      purchaseDate: toDomString(new Date()),
      notificationDistance: '',
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
                label: 'Brand',
                type: 'text',
                name: 'name',
                value: newBike.brand,
                setValue: (val) => setNewBike({ ...newBike, brand: val }),
              },
              {
                label: 'Type',
                type: 'text',
                name: 'type',
                value: newBike.type,
                setValue: (val) => setNewBike({ ...newBike, type: val }),
              },
              {
                label: 'Model',
                type: 'text',
                name: 'model',
                value: newBike.model,
                setValue: (val) => setNewBike({ ...newBike, model: val }),
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
          <AddForm
            title="Add a new component"
            formFields={[
              {
                label: 'Brand',
                type: 'text',
                name: 'brand',
                value: newComponent.brand,
                setValue: (val) =>
                  setNewComponent({ ...newComponent, brand: val }),
              },
              {
                label: 'Type',
                type: 'text',
                name: 'type',
                value: newComponent.type,
                setValue: (val) =>
                  setNewComponent({ ...newComponent, type: val }),
              },
              {
                label: 'Model',
                type: 'text',
                name: 'model',
                value: newComponent.model,
                setValue: (val) =>
                  setNewComponent({ ...newComponent, model: val }),
              },
              {
                label: 'Purchase date',
                type: 'date',
                name: 'purchaseDate',
                value: newComponent.purchaseDate,
                setValue: (val) =>
                  setNewComponent({ ...newComponent, purchaseDate: val }),
              },
              {
                label: 'Notify me after km',
                type: 'number',
                name: 'notificationDistance',
                value: newComponent.notificationDistance,
                setValue: (val) =>
                  setNewComponent({
                    ...newComponent,
                    notificationDistance: val,
                  }),
              },
            ]}
          />
        </Route>
      </Switch>
    </main>
  )
}
