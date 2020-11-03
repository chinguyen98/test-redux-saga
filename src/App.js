import './App.css';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Auth from './components/Auth';
import CounterPage from './components/CounterPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Route exact path='/' component={CounterPage}></Route>
          <Route path='/auth' component={Auth} />
          <Redirect exact to="/auth/sign-in"></Redirect>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
