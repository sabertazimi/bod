import type { AppDispatch } from '../../store'
import styles from './index.module.css'

interface CounterProps {
  count: number
  incrementAmount: string
  onIncrementAmountChange: (value: string) => void
  onDecrement: () => ReturnType<AppDispatch>
  onIncrement: () => ReturnType<AppDispatch>
  onIncrementAsync: () => void
  onIncrementByAmount: () => ReturnType<AppDispatch>
  onIncrementIfOdd: () => void
}

/**
 * Counter
 * @param {CounterProps} Count props
 * @returns {React.JSX.Element} Counter component
 */
function Counter({
  count,
  incrementAmount,
  onIncrementAmountChange,
  onDecrement,
  onIncrement,
  onIncrementAsync,
  onIncrementByAmount,
  onIncrementIfOdd,
}: CounterProps): React.JSX.Element {
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={onDecrement}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={onIncrement}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => onIncrementAmountChange(e.target.value)}
        />
        <button
          className={styles.button}
          aria-label="Add Amount"
          onClick={onIncrementByAmount}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          aria-label="Add Async"
          onClick={onIncrementAsync}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          aria-label="Add If Odd"
          onClick={onIncrementIfOdd}
        >
          Add If Odd
        </button>
      </div>
    </div>
  )
}

export default Counter
