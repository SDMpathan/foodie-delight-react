import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import RestaurantCard from '../RestaurantCard'
import { Restaurant } from '../../types'

describe('RestaurantCard Component', () => {
  const mockRestaurant: Restaurant = {
    id: 1,
    name: 'Test Restaurant',
    description: 'Test Description',
    location: 'Test Location',
  }

  const onEdit = jest.fn()
  const onDelete = jest.fn()

  it('should render the restaurant details', () => {
    render(
      <RestaurantCard
        restaurant={mockRestaurant}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    )

    expect(screen.getByText('Test Restaurant')).toBeInTheDocument()
    expect(screen.getByText('Test Location')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('should call onEdit when the Edit button is clicked', () => {
    render(
      <RestaurantCard
        restaurant={mockRestaurant}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    )

    fireEvent.click(screen.getByText('Edit'))
    expect(onEdit).toHaveBeenCalledWith(mockRestaurant)
  })

  it('should call onDelete when the Delete button is clicked', () => {
    render(
      <RestaurantCard
        restaurant={mockRestaurant}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    )

    fireEvent.click(screen.getByText('Delete'))
    expect(onDelete).toHaveBeenCalledWith(mockRestaurant.id)
  })
})
