import Letter from "./Letter";
import React, { Component } from 'react';


class Solution extends Component {
    render() {
        const arr = ["_ ", "_ ", "_ ", "_ "]
        return (
            <div id="solution">
                <div>{this.props.word.split('').map((letter, index)=> this.props.letterStatus[letter] ? <Letter key={index} letter={letter} /> : <Letter key={index} letter="-" />)} 
                </div>
                <em >{this.props.hint}</em>
            </div>)
    }
}
export default Solution