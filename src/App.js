import React, { Component } from 'react';
import './App.css';
import Solution from './components/Solution'
import Score from './components/Score'
import Letters from './components/Letters'
import Letter from './components/Letter'

export class App extends Component {
  render() {
    return (
      <div>
      <Score/>
      <Solution/>
      <Letters/>
      </div>
    )
  }

}


export default App;
