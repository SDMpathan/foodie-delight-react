import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/reducers/rootReducer'
import RestaurantCard from './RestaurantCard'
import { deleteRestaurant } from '../redux/actions/restaurantActions'
import { Restaurant } from '../types'

interface Props {
  onEdit: (restaurant: Restaurant) => void
}

const RestaurantList: React.FC<Props> = ({ onEdit }) => {
  const restaurants = useSelector(
    (state: RootState) => state.restaurants.restaurants
  )
  const dispatch = useDispatch()

  const handleDelete = (id: number) => {
    dispatch(deleteRestaurant(id))
  }

  return (
    <div className="restaurant-list-main">
      <div className="heading"> Add New Restaurant</div>
      {restaurants.length === 0 ? (
        <div className="watermark">No restaurant to show</div>
      ) : (
        <div className="restaurant-list">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onEdit={onEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default RestaurantList
