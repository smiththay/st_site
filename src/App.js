import React, { Component } from 'react'
import Landing from './components/Landing'
import Home from './components/Home'
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

export default function App() {
    return (
      <div className="App">
        <Router>
          <Switch>

            <Route exact path='/'>
              <Landing />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

          </Switch>
        </Router>

       







      </div>
    );
  }



