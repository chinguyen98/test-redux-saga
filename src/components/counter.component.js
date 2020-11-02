import React from 'react';
import { useSelector } from 'react-redux';

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => {
  const btnLoading = useSelector(state => state.counter.isLoading);
  console.log(btnLoading);
  return (
    <div>
      <button
        className={`btn ${btnLoading === true ? 'btn-dark' : 'btn-primary'}`}
        onClick={onIncrementAsync}
        disabled={btnLoading}
      >
        {
          btnLoading ? 'Incrementing...!!!!' : 'Increment after 3 second'
        }
      </button>
      {' '}
      <button className="btn btn-success" onClick={onIncrement}>
        Increment
      </button>
      {' '}
      <button className="btn btn-danger" onClick={onDecrement}>
        Decrement
      </button>
      <hr />
      <div>
        Clicked: {value} time(s)
      </div>
    </div>
  );
}


export default Counter;