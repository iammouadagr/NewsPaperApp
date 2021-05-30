import './App.css';
import Header from './components/Header';
import Sports from './components/Sports';
import Business from './components/Business';
import Health from './components/Health';
import Entertainment from './components/Entertainment';
import Home from './components/Home';
import Navigation from './components/Navigation';
import { Route, Switch } from 'react-router';


function App() {
  return (
    <div className='App'>
      <Header />
      <Navigation>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/health' component={Health} />
          <Route exact path='/business' component={Business} />
          <Route exact path='/sports' component={Sports} />
          <Route exact path='/entertainment' component={Entertainment} />
        </Switch>
      </Navigation>
    </div>
    
  );
}

export default App;
