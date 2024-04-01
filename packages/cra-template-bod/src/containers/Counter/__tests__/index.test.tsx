import { fireEvent, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { renderWithProviders } from '../../../utils/test-utils'
import Counter from '../index'

describe('counter', () => {
  it('should render correctly (snapshot)', () => {
    const { container } = renderWithProviders(<Counter />)

    expect(container).toMatchSnapshot()
  })

  it('should render accessibility guidelines (AXE)', async () => {
    const { container } = renderWithProviders(<Counter />)

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  it('should call onDecrement when "-" button is clicked', () => {
    renderWithProviders(<Counter />)

    const decrementButton = screen.getByLabelText('Decrement value')
    fireEvent.click(decrementButton)
  })

  it('should call onIncrement when "+" button is clicked', () => {
    renderWithProviders(<Counter />)

    const incrementButton = screen.getByLabelText('Increment value')
    fireEvent.click(incrementButton)
  })

  it('should call onIncrementByAmount when "Add Amount" button is clicked', () => {
    renderWithProviders(<Counter />)

    const addAmountButton = screen.getByLabelText('Add Amount')
    fireEvent.click(addAmountButton)
  })

  it('should call onIncrementAsync when "Add Async" button is clicked', () => {
    renderWithProviders(<Counter />)

    const addAsyncButton = screen.getByLabelText('Add Async')
    fireEvent.click(addAsyncButton)
  })

  it('should call onIncrementIfOdd when "Add If Odd" button is clicked', () => {
    renderWithProviders(<Counter />)

    const addIfOddButton = screen.getByLabelText('Add If Odd')
    fireEvent.click(addIfOddButton)
  })
})
