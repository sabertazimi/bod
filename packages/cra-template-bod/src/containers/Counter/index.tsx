import React, { useState } from 'react';
import { Counter as CounterComponent } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from './slice';

const Counter = (): JSX.Element => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <CounterComponent
      count={count}
      incrementAmount={incrementAmount}
      onIncrementAmountChange={setIncrementAmount}
      onDecrement={() => dispatch(decrement())}
      onIncrement={() => dispatch(increment())}
      onIncrementAsync={() => dispatch(incrementAsync(incrementValue))}
      onIncrementByAmount={() => dispatch(incrementByAmount(incrementValue))}
      onIncrementIfOdd={() => dispatch(incrementIfOdd(incrementValue))}
    />
  );
};

export default Counter;
