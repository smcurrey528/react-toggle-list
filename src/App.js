import React, { Component } from 'react';
import './App.css';
import ToggleList from './components/ToggleList';

class App extends Component {
  render() {
    return (
       <div>
       <h1> Toggle List </h1>
       <h5> Click on the name to see more information</h5>
       <ToggleList/>
       </div>
    )
  }
}

export default App;
