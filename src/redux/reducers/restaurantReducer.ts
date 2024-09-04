import {
  ADD_RESTAURANT,
  UPDATE_RESTAURANT,
  DELETE_RESTAURANT,
} from '../actions/actionTypes'
import { Restaurant } from '../../types'
import { restaurants } from '../../mockData'

interface RestaurantState {
  restaurants: Restaurant[]
}

const initialState: RestaurantState = {
  restaurants: restaurants,
}

const restaurantReducer = (
  state = initialState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: any
): RestaurantState => {
  switch (action.type) {
    case ADD_RESTAURANT:
      return {
        ...state,
        restaurants: [...state.restaurants, action.payload],
      }
    case UPDATE_RESTAURANT:
      return {
        ...state,
        restaurants: state.restaurants.map((restaurant) =>
          restaurant.id === action.payload.id ? action.payload : restaurant
        ),
      }
    case DELETE_RESTAURANT:
      return {
        ...state,
        restaurants: state.restaurants.filter(
          (restaurant) => restaurant.id !== action.payload
        ),
      }
    default:
      return state
  }
}

export default restaurantReducer
