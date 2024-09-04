import React, { useState } from 'react'
import RestaurantList from '../src/component/RestaurantList'
import RestaurantForm from '../src/component/RestaurantForm'
import { Restaurant } from './types'
import './styles.css'

const App: React.FC = () => {
  const [editingRestaurant, setEditingRestaurant] = useState<Restaurant | null>(
    null
  )

  const handleFormSubmit = () => {
    setEditingRestaurant(null) // Clear the editing state after form submission
  }

  const handleEdit = (restaurant: Restaurant) => {
    setEditingRestaurant(restaurant)
  }

  return (
    <div className="App">
      <div className="title">Foodie Delight</div>
      <RestaurantForm
        restaurantToEdit={editingRestaurant}
        onFormSubmit={handleFormSubmit}
      />
      <RestaurantList onEdit={handleEdit} />
    </div>
  )
}

export default App
