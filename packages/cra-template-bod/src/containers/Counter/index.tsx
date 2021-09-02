import React, { useState } from 'react';
import { Counter as CounterComponent } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import styles from './index.module.css';
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
    <div>
      <CounterComponent
        count={count}
        onDecrement={() => dispatch(decrement())}
        onIncrement={() => dispatch(increment())}
        onIncrementAsync={() => dispatch(incrementAsync(incrementValue))}
        onIncrementByAmount={() => dispatch(incrementByAmount(incrementValue))}
        onIncrementIfOdd={() => dispatch(incrementIfOdd(incrementValue))}
      />
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Counter;
