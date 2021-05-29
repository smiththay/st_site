import React, { Component } from 'react'
import Landing from './components/Landing'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
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

            <Route path='/portfolio'>
              <Portfolio />
            </Route>

            <Route path='/blog'>
              <Blog />
            </Route>


          </Switch>
        </Router>

       







      </div>
    );
  }



