import React from 'react';

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
  <div>
    <button className="btn btn-primary" onClick={onIncrementAsync}>
      Increment after 1 second
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
      Clicked: {value} times
    </div>
  </div>

export default Counter;