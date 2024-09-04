import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  addRestaurant,
  updateRestaurant,
} from '../redux/actions/restaurantActions'
import { Restaurant } from '../types'

interface Props {
  restaurantToEdit?: Restaurant | null
  onFormSubmit: () => void
}

const RestaurantForm: React.FC<Props> = ({
  restaurantToEdit,
  onFormSubmit,
}) => {
  const [restaurant, setRestaurant] = useState<Partial<Restaurant>>({
    name: '',
    description: '',
    location: '',
  })
  const [isFormValid, setIsFormValid] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    if (restaurantToEdit) {
      setRestaurant(restaurantToEdit)
    }
  }, [restaurantToEdit])

  useEffect(() => {
    const { name, description, location } = restaurant
    setIsFormValid(!!name && !!description && !!location)
  }, [restaurant])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setRestaurant({
      ...restaurant,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    if (isFormValid) {
      if (restaurant.id) {
        dispatch(updateRestaurant(restaurant as Restaurant))
      } else {
        const newRestaurant = { ...restaurant, id: Date.now() } as Restaurant
        dispatch(addRestaurant(newRestaurant))
      }
      setRestaurant({ name: '', description: '', location: '' })
      onFormSubmit()
    }
  }

  return (
    <div className="restaurant-form-main">
      <div className="heading heading">Add New Restaurant</div>
      <div className="restaurant-form">
        <div>
          Name: <span className="required">*</span>
        </div>
        <input
          name="name"
          placeholder="Restaurant Name"
          value={restaurant.name || ''}
          onChange={handleChange}
          maxLength={50}
          required
        />
        <small className="error">
          Max Character 50 <span>{restaurant?.name?.length}/50</span>
        </small>

        <div>
          Location: <span className="required">*</span>
        </div>
        <input
          name="location"
          placeholder="Location"
          value={restaurant.location || ''}
          onChange={handleChange}
          maxLength={100}
          required
        />
        <small className="error">
          Max Character 100 <span>{restaurant?.location?.length}/100</span>
        </small>

        <div>
          Description: <span className="required">*</span>
        </div>
        <input
          name="description"
          placeholder="Description"
          value={restaurant.description || ''}
          onChange={handleChange}
          maxLength={150}
          required
        />
        <small className="error">
          Max Character 150 <span>{restaurant?.description?.length}/150</span>
        </small>

        <button onClick={handleSubmit} disabled={!isFormValid}>
          {restaurantToEdit ? 'Update Restaurant' : 'Add Restaurant'}
        </button>
      </div>
    </div>
  )
}

export default RestaurantForm
