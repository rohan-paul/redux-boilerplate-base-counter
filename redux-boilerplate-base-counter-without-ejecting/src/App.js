import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import Routes from './Routes'

import './App.css';

import About from './containers/About';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <main className="container">
            <div>
                <h1>hello world</h1>
            </div>
            <ul className="left">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <Routes />
            </main>

        </BrowserRouter>
    );
  }
}

export default App;