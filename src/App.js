import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'

import './App.css';
import About from './containers/About';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <About />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;