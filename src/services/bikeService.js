import { toDomString } from './dateService'
import { createID } from './idService'

export function NewBike() {
  return {
    id: createID(),
    brand: '',
    type: '',
    model: '',
    purchaseDate: toDomString(new Date()),
    components: [],
  }
}

export function NewComponent() {
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
