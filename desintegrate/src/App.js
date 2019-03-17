import React from 'react';
import './App.css';
import {Route, Router, browserHistory} from 'react-router';
import Home from './components/home';
import Login from './components/login'
import Register from './components/register'
import Dash from './components/dash'
import Board from './components/board'
import Add from './components/addproject'
import Analytics from './components/analytics'
export const routes=(
  <Route>
  <Route exact path="/" component={Home}/>  
  <Route path="/login" component={Login}/>
  <Route path="/register" component={Register}/>
  <Route component={Dash}>
  <Route path="/dashboard" component={Board}/>
  <Route path="/addproject" component={Add}/>
  <Route path="/analytics" component={Analytics}/>
  </Route>
  </Route>
);

const Root =  ()=>(
  <Router history={browserHistory} routes={routes}/>
)

export default Root;