import React, { Component } from 'react';
import './App.css';
import Solution from './components/Solution'
import Score from './components/Score'
import Letters from './components/Letters'
import EndGame from './components/EndGame'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: this.randomwordsAndHints(),
      score: 100,
    }
  }

  randomwordsAndHints() {
    let wordsAndHints = [
      { word: "CALM", hint: "Your ideal mood when coding" },
      { word: "LEO", hint: "My dog name" },
      { word: "DONALD", hint: "USA president first name" },
      { word: "PASTA", hint: "Italian food that everyone like" },
    ]
    let randomwordsAndHints = Math.floor(Math.random() * wordsAndHints.length)
    return wordsAndHints[randomwordsAndHints]
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  selectLetter = (letter) => {
    this.state.letterStatus[letter] = true
    let currentScore = this.state.score
    let word = this.state.solution.word
    let checkIfInclude = word.includes(letter)
    if (checkIfInclude) {
      currentScore += 5
    }
    else {
      currentScore -= 20
    }
    this.setState({
      letterStatus: this.state.letterStatus,
      score: currentScore
    }
    )
  }

  refresh = () => {
    window.location.reload()
  }

  render() {
    return (
      <div>
        <Score score={this.state.score} />
        <Solution letterStatus={this.state.letterStatus} word={this.state.solution.word} hint={this.state.solution.hint} />
        <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} />
        <EndGame score={this.state.score} word={this.state.solution.word} letterStatus={this.state.letterStatus} refresh={this.refresh} />
      </div>
    )
  }

}


export default App;
