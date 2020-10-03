import React, { Component } from 'react'

// const Letter = (props) => <span id="letter">{props.letter}</span>

class Letter extends Component {

    
    letterSelected = () => {
        this.props.selectLetter(this.props.letter)
    }

    render() {
        return (
            <span id="letter" className={this.props.class} onClick={this.letterSelected}>{this.props.letter}</span>
        )
    }
}

export default Letter