import React, { Component } from 'react';
import Main from './components/main';
import NavBar from './components/navbar';
import Footer from './components/footer';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
            <div className="topDecoration" aria-hidden="true"></div>
            <NavBar/>
            <Main/>
            <Footer/>
      </div>
    );
  }
}

export default App;
