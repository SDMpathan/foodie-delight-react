import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import RestaurantForm from '../RestaurantForm'
import { Restaurant } from '../../types'

const mockStore = configureStore([])
const initialState = {
  restaurants: { restaurants: [] },
}
const store = mockStore(initialState)

describe('RestaurantForm Component', () => {
  const onFormSubmit = jest.fn()

  it('should render the form', () => {
    render(
      <Provider store={store}>
        <RestaurantForm onFormSubmit={onFormSubmit} />
      </Provider>
    )

    expect(screen.getByPlaceholderText('Restaurant Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Location')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Description')).toBeInTheDocument()
  })

  it('should validate form and call onFormSubmit on valid submission', () => {
    render(
      <Provider store={store}>
        <RestaurantForm onFormSubmit={onFormSubmit} />
      </Provider>
    )

    const nameInput = screen.getByPlaceholderText('Restaurant Name')
    const locationInput = screen.getByPlaceholderText('Location')
    const descriptionInput = screen.getByPlaceholderText('Description')
    const submitButton = screen.getByText('Add Restaurant')

    fireEvent.change(nameInput, { target: { value: 'New Restaurant' } })
    fireEvent.change(locationInput, { target: { value: 'New Location' } })
    fireEvent.change(descriptionInput, { target: { value: 'Great Food' } })

    expect(submitButton).not.toBeDisabled()
    fireEvent.click(submitButton)

    expect(onFormSubmit).toHaveBeenCalled()
  })

  it('should update the restaurant if restaurantToEdit is provided', () => {
    const restaurantToEdit: Restaurant = {
      id: 1,
      name: 'Existing Restaurant',
      description: 'Great Food',
      location: 'Existing Location',
    }

    render(
      <Provider store={store}>
        <RestaurantForm
          restaurantToEdit={restaurantToEdit}
          onFormSubmit={onFormSubmit}
        />
      </Provider>
    )

    expect(
      (screen.getByPlaceholderText('Restaurant Name') as HTMLInputElement).value
    ).toBe('Existing Restaurant')
    expect(
      (screen.getByPlaceholderText('Location') as HTMLInputElement).value
    ).toBe('Existing Location')
    expect(
      (screen.getByPlaceholderText('Description') as HTMLInputElement).value
    ).toBe('Great Food')
  })
})
