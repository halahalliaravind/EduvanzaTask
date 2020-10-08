import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './LandingPage';
import Adminpage from './Adminpage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route path='/adminpage' component={Adminpage}/>
    </Switch>
  </main>
)

export default Main