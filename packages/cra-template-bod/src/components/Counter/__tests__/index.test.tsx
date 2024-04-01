import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import Counter from '../index'

describe('counter', () => {
  it('should render correctly (snapshot)', () => {
    const mockHandler = jest.fn()
    const { container } = render(
      <Counter
        count={0}
        incrementAmount="2"
        onIncrementAmountChange={mockHandler}
        onDecrement={mockHandler}
        onIncrement={mockHandler}
        onIncrementAsync={mockHandler}
        onIncrementByAmount={mockHandler}
        onIncrementIfOdd={mockHandler}
      />,
    )

    expect(container).toMatchSnapshot()
  })

  it('should render accessibility guidelines (AXE)', async () => {
    const mockHandler = jest.fn()
    const { container } = render(
      <Counter
        count={0}
        incrementAmount="2"
        onIncrementAmountChange={mockHandler}
        onDecrement={mockHandler}
        onIncrement={mockHandler}
        onIncrementAsync={mockHandler}
        onIncrementByAmount={mockHandler}
        onIncrementIfOdd={mockHandler}
      />,
    )

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  it('should call onDecrement when "-" button is clicked', () => {
    const mockHandler = jest.fn()
    render(
      <Counter
        count={5}
        incrementAmount="2"
        onIncrementAmountChange={mockHandler}
        onDecrement={mockHandler}
        onIncrement={mockHandler}
        onIncrementAsync={mockHandler}
        onIncrementByAmount={mockHandler}
        onIncrementIfOdd={mockHandler}
      />,
    )

    const decrementButton = screen.getByLabelText('Decrement value')
    fireEvent.click(decrementButton)

    expect(mockHandler).toHaveBeenCalledTimes(1)
  })

  it('should call onIncrement when "+" button is clicked', () => {
    const mockHandler = jest.fn()
    render(
      <Counter
        count={5}
        incrementAmount="2"
        onIncrementAmountChange={mockHandler}
        onDecrement={mockHandler}
        onIncrement={mockHandler}
        onIncrementAsync={mockHandler}
        onIncrementByAmount={mockHandler}
        onIncrementIfOdd={mockHandler}
      />,
    )

    const incrementButton = screen.getByLabelText('Increment value')
    fireEvent.click(incrementButton)

    expect(mockHandler).toHaveBeenCalledTimes(1)
  })

  it('should call onIncrementAmountChange when input value changes', () => {
    const mockHandler = jest.fn()
    render(
      <Counter
        count={5}
        incrementAmount="2"
        onIncrementAmountChange={mockHandler}
        onDecrement={mockHandler}
        onIncrement={mockHandler}
        onIncrementAsync={mockHandler}
        onIncrementByAmount={mockHandler}
        onIncrementIfOdd={mockHandler}
      />,
    )

    const incrementAmountInput = screen.getByLabelText('Set increment amount')
    fireEvent.change(incrementAmountInput, { target: { value: '10' } })

    expect(mockHandler).toHaveBeenCalledTimes(1)
  })

  it('should call onIncrementByAmount when "Add Amount" button is clicked', () => {
    const mockHandler = jest.fn()
    render(
      <Counter
        count={5}
        incrementAmount="2"
        onIncrementAmountChange={mockHandler}
        onDecrement={mockHandler}
        onIncrement={mockHandler}
        onIncrementAsync={mockHandler}
        onIncrementByAmount={mockHandler}
        onIncrementIfOdd={mockHandler}
      />,
    )

    const addAmountButton = screen.getByLabelText('Add Amount')
    fireEvent.click(addAmountButton)

    expect(mockHandler).toHaveBeenCalledTimes(1)
  })

  it('should call onIncrementAsync when "Add Async" button is clicked', () => {
    const mockHandler = jest.fn()
    render(
      <Counter
        count={5}
        incrementAmount="2"
        onIncrementAmountChange={mockHandler}
        onDecrement={mockHandler}
        onIncrement={mockHandler}
        onIncrementAsync={mockHandler}
        onIncrementByAmount={mockHandler}
        onIncrementIfOdd={mockHandler}
      />,
    )

    const addAsyncButton = screen.getByLabelText('Add Async')
    fireEvent.click(addAsyncButton)

    expect(mockHandler).toHaveBeenCalledTimes(1)
  })

  it('should call onIncrementIfOdd when "Add If Odd" button is clicked', () => {
    const mockHandler = jest.fn()
    render(
      <Counter
        count={5}
        incrementAmount="2"
        onIncrementAmountChange={mockHandler}
        onDecrement={mockHandler}
        onIncrement={mockHandler}
        onIncrementAsync={mockHandler}
        onIncrementByAmount={mockHandler}
        onIncrementIfOdd={mockHandler}
      />,
    )

    const addIfOddButton = screen.getByLabelText('Add If Odd')
    fireEvent.click(addIfOddButton)

    expect(mockHandler).toHaveBeenCalledTimes(1)
  })
})
