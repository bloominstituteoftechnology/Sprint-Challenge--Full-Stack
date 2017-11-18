import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import NavBar from './Components/NavBar';
import ContentBox from './Components/Content';
import './Css/Header.css'

class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <header className='header'>
        <h1> Budget Creator </h1>
        <NavBar />
        </header>
          <div className='header'>
              <ContentBox />
          </div>
      </div>
      </Router>
    );
  }
}

export default App;
