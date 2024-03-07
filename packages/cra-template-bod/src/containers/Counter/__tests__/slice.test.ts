import { makeStore } from '../../../store'
import type { CounterState } from '../slice'
import {
  counterSlice,
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '../slice'

describe('counter reducer', () => {
  const initialState: CounterState = {
    value: 3,
    status: 'idle',
  }

  let store = makeStore()

  beforeEach(() => {
    store = makeStore({ counter: initialState })
  })

  it('should handle initial state', () => {
    expect(counterSlice.reducer(undefined, { type: 'unknown' })).toStrictEqual({
      value: 0,
      status: 'idle',
    })
  })

  it('should handle increment', () => {
    expect(selectCount(store.getState())).toBe(3)

    store.dispatch(increment())

    expect(selectCount(store.getState())).toBe(4)
  })

  it('should handle decrement', () => {
    expect(selectCount(store.getState())).toBe(3)

    store.dispatch(decrement())

    expect(selectCount(store.getState())).toBe(2)
  })

  it('should handle incrementByAmount', () => {
    expect(selectCount(store.getState())).toBe(3)

    store.dispatch(incrementByAmount(2))

    expect(selectCount(store.getState())).toBe(5)
  })
})
