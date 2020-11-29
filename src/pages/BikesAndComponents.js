import { useState } from 'react'
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom'
import Button from '../components/Button'
import BikeContainer from '../components/BikeContainer'
import Form from '../components/Form'
import { toDomString } from '../services/dateService'
import { createID } from '../services/idService'
import styled from 'styled-components'
import Header from '../components/Header'

import testState from '../fixtures/bikeTestState'

export default function BikeAndComponentsPage() {
  let { path } = useRouteMatch()

  const [bikes, setBikes] = useState(
    testState.sort((a, b) => (a.brand > b.brand ? 1 : -1))
  )
  const [newBike, setNewBike] = useState(getNewBike())
  const [newComponent, setNewComponent] = useState(getNewComponent())

  function addNewBike() {
    setBikes([...bikes, newBike].sort((a, b) => (a.brand > b.brand ? 1 : -1)))
    setNewBike(getNewBike())
  }

  function addNewComponent() {
    const bikeToUpdate = bikes.find((bike) => newComponent.bikeId === bike.id)

    if (bikeToUpdate) {
      setBikes(
        [
          ...bikes.filter((bike) => newComponent.bikeId !== bike.id),
          {
            ...bikeToUpdate,
            components: [...bikeToUpdate?.components, newComponent],
          },
        ].sort((a, b) => (a.brand > b.brand ? 1 : -1))
      )
    }
    setNewComponent(getNewComponent())
  }

  return (
    <>
      <Header />
      <PageWrapper>
        <h2>Bikes and Components</h2>
        <p>Overview of your bikes and components</p>

        <ButtonSection>
          <Button>
            <LinkStyled to={`${path}/add-new-bike`} activeClassName="selected">
              Add new Bike
            </LinkStyled>
          </Button>

          <Button>
            <LinkStyled
              to={`${path}/add-new-component`}
              activeClassName="selected"
            >
              Add new component
            </LinkStyled>
          </Button>
        </ButtonSection>

        <BikeContainer bikes={bikes} />

        <Switch>
          <Route path={`${path}/add-new-bike`}>
            <Form
              key="editor1"
              title="Add a new bike"
              formFields={[
                {
                  id: 1,
                  label: 'Brand',
                  type: 'text',
                  name: 'name',
                  value: newBike.brand,
                  setValue: (val) => setNewBike({ ...newBike, brand: val }),
                },
                {
                  id: 2,
                  label: 'Type',
                  type: 'text',
                  name: 'type',
                  value: newBike.type,
                  setValue: (val) => setNewBike({ ...newBike, type: val }),
                },
                {
                  id: 3,
                  label: 'Model',
                  type: 'text',
                  name: 'model',
                  value: newBike.model,
                  setValue: (val) => setNewBike({ ...newBike, model: val }),
                },
                {
                  id: 4,
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
            <Form
              title="Add a new component"
              formFields={[
                {
                  label: 'Select your bike',
                  type: 'select',
                  name: 'bike',
                  options: bikes,
                  value: newComponent.bikeId,
                  setValue: (val) =>
                    setNewComponent({ ...newComponent, bikeId: Number(val) }),
                },
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
              submitHandler={addNewComponent}
            />
          </Route>
        </Switch>
      </PageWrapper>
    </>
  )
}

const PageWrapper = styled.main`
  display: grid;
  justify-content: center;
`

const ButtonSection = styled.section`
  display: flex;
  justify-content: center;
`

const LinkStyled = styled(NavLink)`
  color: var(--white);
  text-decoration: none;

  &.selected {
    color: var(--highlight);
  }
`

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
    bikeId: 0,
  }
}
