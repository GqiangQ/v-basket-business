import { Button, Card } from 'antd';
import * as React from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom'

import In from './In'
import On from './On'

import './in.css'

export default class Sign extends React.Component {
  public render() {
    return (
      <div style={{width: '100vw',height: '100vh'}}>
        <Route path='/sign/in' component={In}></Route>
        <Route path='/sign/on' component={On}></Route>
        <Redirect to="/sign/in"></Redirect>
      </div>
    );
  }
}