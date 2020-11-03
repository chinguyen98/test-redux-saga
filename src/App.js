import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Auth from './components/Auth';
import CounterPage from './components/CounterPage';
import Feeds from './components/Feeds';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Route exact path='/' component={CounterPage} />
          <Route exact path='/feeds' component={Feeds} />
          <Route path='/auth' component={Auth} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
