import './App.css';
import Counter from './components/counter.component';
import { useDispatch, useSelector } from 'react-redux';
import { asyncIncrementCounter, decrementCounter, incrementCounter } from './actions/counter.action';

function App() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-danger">Hello redux saga 😂</h1>
        <div>
          <Counter
            value={count}
            onIncrement={() => dispatch(incrementCounter())}
            onDecrement={() => dispatch(decrementCounter())}
            onIncrementAsync={() => dispatch(asyncIncrementCounter())}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
