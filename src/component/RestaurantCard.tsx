import React from 'react'
import { Restaurant } from '../types'

interface Props {
  restaurant: Restaurant
  onEdit: (restaurant: Restaurant) => void
  onDelete: (id: number) => void
}

const RestaurantCard: React.FC<Props> = ({ restaurant, onEdit, onDelete }) => {
  return (
    <div className="restaurant-card">
      <div className="card-line">
        <svg
          xlinkTitle="restaurant"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M12.5 1a.5.5 0 0 1 .5.5v13.5h1v1h-4v-1h1v-2h-7v2h1v1h-4v-1h1V1.5a.5.5 0 0 1 .5-.5h10zm-.5 1v3H10V2h2zm0 4v2H10V6h2zm-3-4v3H7V2h2zm0 4v2H7V6h2zm-3-4v3H4V2h2zm0 4v2H4V6h2zm0 4v2H4v-2h2zm3 0v2H7v-2h2zm3 0v2h-2v-2h2zm1 2.5v-11h-10v11h10zM13 15h-1v-1h1v1zM3 15h1v-1H3v1z" />
        </svg>
        <span className="name" title={`${restaurant.name}`}>
          {restaurant.name}
        </span>
      </div>
      <div className="card-line">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="14"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a5.5 5.5 0 0 0-5.5 5.5c0 3.4 5.5 10.5 5.5 10.5s5.5-7.1 5.5-10.5A5.5 5.5 0 0 0 8 0zm0 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
        </svg>
        <span title={`${restaurant.location}`}>{restaurant.location}</span>
      </div>
      <div className="card-line">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h4.5L14 4.5zm-1-.5H9.5a1 1 0 0 1-1-1V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4z" />
          <path d="M5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z" />
        </svg>
        <span title={`${restaurant.description}`}>
          {restaurant.description}
        </span>
      </div>
      <div className="buttons">
        <button className="edit-button" onClick={() => onEdit(restaurant)}>
          Edit
        </button>
        <button
          className="delete-button"
          onClick={() => onDelete(restaurant.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default RestaurantCard
