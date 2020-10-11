import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/about/About';
import Media from './pages/Media';
import Sponsors from './pages/Sponsors';
import Design from './pages/Design';
import PastYears from './pages/about/PastYears';
import Contact from './pages/Contact';
import PreviousTeams from './pages/about/PreviousTeams';
import Applications from './pages/Applications';
import Team2019 from './pages/about/Team2019';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Academy from './pages/academy/Academy';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/about' exact={true} component={About}/>
          <Route path='/media' exact={true} component={Media}/>
          <Route path='/sponsors' exact={true} component={Sponsors}/>
          <Route path='/design' exact={true} component={Design}/>
          <Route path='/contact' exact={true} component={Contact}/>
          <Route path='/about/history' exact={true} component={PastYears}/>
          <Route path='/about/alumni' exact={true} component={PreviousTeams}/>
          <Route path='/apply' exact={true} component={Applications}/>
          <Route path='/team2019' component={Team2019}/>
          <Route path='/academy' exact={true} component={Academy}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;