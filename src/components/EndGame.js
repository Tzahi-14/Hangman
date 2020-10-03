import React, { Component } from 'react';

class EndGame extends Component {

    isUserGuessTheWord() {
        let correctLetterCounter = 0
        let word = this.props.word
        let splitLetters = this.props.word.split('')
        for (let w of splitLetters) {
            if (this.props.letterStatus[w] === true) {
                correctLetterCounter++
                if (correctLetterCounter === word.length) {
                    return (
                    <div>Congratulations <button onClick={this.startNewGame}>Start again</button></div> 
                    )
                }
            }
        }
    }

    startNewGame = () => {
        this.props.refresh()
    }

    render() {
        return (
            <div id="endGame">
                <div>{this.props.score <= 0 ? <div> Game Over, the secret word was:  {this.props.word} <button onClick={this.startNewGame}>Start again</button> </div> : ""} </div>
                <div>{this.isUserGuessTheWord()}</div>
            </div>

        )
    }

}

export default EndGame