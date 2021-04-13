import * as React from 'react';
import { Link, NavLink, Route, Switch, Redirect } from 'react-router-dom'

import Sign from './pages/sign'
import Home from './pages/home'
import FrontendAuth from  './components/FrontendAuth'
export default class App extends React.Component {
  public render() {
    return (
      <>
      <Switch>
        <FrontendAuth/>
        {/* <Route path='/sign' component={Sign}></Route>
        <Route path='/home' component={Home}></Route>
        <Redirect to='/home' /> */}
      </Switch>
      </>
    );
  }
}
