import React, { Component } from 'react';
import './App.css';

import Farewell from './components/Farewell/Farewell'

const config = require('../config/config.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Farewell subject={config.subject} />
      </div>
    );
  }
}

export default App;
