import { toDomString } from '../services/dateService'

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
    brand: 'Canyon',
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
]

export default testState
