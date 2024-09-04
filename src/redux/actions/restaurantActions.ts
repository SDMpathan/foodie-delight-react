import { Restaurant } from '../../types'
import {
  ADD_RESTAURANT,
  UPDATE_RESTAURANT,
  DELETE_RESTAURANT,
} from './actionTypes'

export const addRestaurant = (restaurant: Restaurant) => ({
  type: ADD_RESTAURANT,
  payload: restaurant,
})

export const updateRestaurant = (restaurant: Restaurant) => ({
  type: UPDATE_RESTAURANT,
  payload: restaurant,
})

export const deleteRestaurant = (id: number) => ({
  type: DELETE_RESTAURANT,
  payload: id,
})
