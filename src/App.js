import logo from './logo.svg';
import './App.css';
import Counter from './components/counter.component';
import store, { action } from './store';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-danger">Hello redux saga</h1>
        <div>
          <Counter
            value={store.getState().countReducer.count}
            onIncrement={() => action('INCREMENT')}
            onDecrement={() => action('DECREMENT')}
            onIncrementAsync={() => action('INCREMENT_ASYNC')}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
