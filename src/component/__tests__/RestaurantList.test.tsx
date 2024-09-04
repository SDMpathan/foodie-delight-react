import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import RestaurantList from './../RestaurantList'
import { Restaurant } from '../../types'

const mockStore = configureStore([])

const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Restaurant One',
    description: 'Desc One',
    location: 'Loc One',
  },
  {
    id: 2,
    name: 'Restaurant Two',
    description: 'Desc Two',
    location: 'Loc Two',
  },
]

const initialState = {
  restaurants: { restaurants: mockRestaurants },
}

describe('RestaurantList Component', () => {
  const store = mockStore(initialState)
  const onEdit = jest.fn()

  it('should render a list of restaurants', () => {
    render(
      <Provider store={store}>
        <RestaurantList onEdit={onEdit} />
      </Provider>
    )

    expect(screen.getByText('Restaurant One')).toBeInTheDocument()
    expect(screen.getByText('Restaurant Two')).toBeInTheDocument()
  })

  it('should call onEdit when Edit button is clicked', () => {
    render(
      <Provider store={store}>
        <RestaurantList onEdit={onEdit} />
      </Provider>
    )

    fireEvent.click(screen.getAllByText('Edit')[0])
    expect(onEdit).toHaveBeenCalledWith(mockRestaurants[0])
  })

  it('should dispatch deleteRestaurant when Delete button is clicked', () => {
    render(
      <Provider store={store}>
        <RestaurantList onEdit={onEdit} />
      </Provider>
    )

    fireEvent.click(screen.getAllByText('Delete')[0])

    const actions = store.getActions()
    expect(actions).toContainEqual({
      type: 'DELETE_RESTAURANT',
      payload: mockRestaurants[0].id,
    })
  })
})
