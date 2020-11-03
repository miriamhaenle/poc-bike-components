import { useState } from 'react'

export default function AddNewBikeForm() {
  const [newBike, setNewBike] = useState({
    name: '',
    type: '',
    brand: '',
    purchaseDate: '',
  })

  return (
    <form>
      <h4>Add a new bike</h4>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={newBike.name} />
      <label htmlFor="Type">Type</label>
      <input type="text" name="name" value={newBike.type} />
      <label htmlFor="brand">type</label>
      <input type="text" name="brand" value={newBike.brand} />
      <label htmlFor="name">Purchased</label>
      <input type="date" name="name" value={newBike.purchaseDate} />
      <button>Add</button>
      <button>Cancel</button>
    </form>
  )
}
