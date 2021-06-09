import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import Sports from './components/Sports';
import Business from './components/Business';
import Health from './components/Health';
import Entertainment from './components/Entertainment';
import Home from './components/Home';
import Navigation from './components/Navigation';
import ArticleDetails from './components/ArticleDetails'
import { Route, Switch } from 'react-router';
import {useData} from  './Data/ContentProvider'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedPge :"home"
    }
  }

  render() {
    return (
      <div className='App'>
      <Header />
      
      <Navigation/>

      <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/health' >
            <Health/>
          </Route>
          <Route exact path='/business' >
            <Business/>
          </Route>
          <Route exact path='/sports' >
            <Sports/>
          </Route>
          <Route exact path='/entertainment' >
            <Entertainment/>
          </Route>
          <Route  path='/breakingNews/:id'>
            <ArticleDetails category="breakingNews"/>
          </Route>
          <Route  path='/health/:id'>
            <ArticleDetails category="health"/>
          </Route>
          <Route  path='/sports/:id'>
            <ArticleDetails category="sports"/>
          </Route>
          <Route  path='/business/:id'>
            <ArticleDetails category="business"/>
          </Route>
          <Route  path='/entertainment/:id'>
            <ArticleDetails category="entertainment"/>
          </Route>
          <Route  path='/allcategories/:id'>
            <ArticleDetails category="allcategories"/>
          </Route>
        </Switch>

      
     
      

      
      
    </div>
    
    )
  }
}



export default App;
