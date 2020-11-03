import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncIncrementCounter, decrementCounter, incrementCounter } from '../../actions/counter.action';
import Counter from './counter.component';

function CounterPage() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="text-danger">Hello redux saga 😂</h1>
      <div>
        <Counter
          value={count}
          onIncrement={() => dispatch(incrementCounter())}
          onDecrement={() => dispatch(decrementCounter())}
          onIncrementAsync={() => dispatch(asyncIncrementCounter())}
        />
      </div>
    </>
  )
}

export default CounterPage;