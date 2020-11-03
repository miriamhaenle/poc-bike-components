import { useState } from 'react'
import { toDomString } from '../services/dateService'

export default function AddNewBikeForm({ bikes }) {
  const [newComponent, setNewComponent] = useState({
    name: '',
    type: '',
    brand: '',
    purchaseDate: toDomString(new Date()),
    notificationDistance: '',
  })

  console.log(toDomString(new Date()))

  function handleChange(event) {
    setNewComponent({
      ...newComponent,
      [event.target.name]: event.target.value,
    })
  }
  return (
    <form>
      <h4>Add a new components</h4>
      <label>My bikes</label>
      <select name="" id="">
        {bikes.map((bike) => (
          <option value={bike}>{bike}</option>
        ))}
      </select>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={newComponent.name} />
      <label htmlFor="Type">Type</label>
      <input type="text" name="name" value={newComponent.type} />
      <label htmlFor="brand">type</label>
      <input type="text" name="brand" value={newComponent.brand} />
      <label htmlFor="purchaseDate">Purchased</label>
      <input
        type="date"
        name="purchaseDate"
        value={newComponent.purchaseDate}
        onChange={handleChange}
      />
      <label htmlFor="name">Notification</label>
      <input
        type="checkbox"
        name="notificationDistance"
        value={newComponent.notifications}
      />
      Notify me when my componant was used for
      <input type="text" name="notificationDistance" />
      <button>Add</button>
      <button>Cancel</button>
    </form>
  )
}
