import React, { Component } from 'react'



class Score extends Component {
    checkScore = () => {
        if (this.props.score>80) {
            return <div id="score" style={{color: "green"}}>{this.props.score}</div>
        }
        else if(this.props.score<80 && this.props.score>50 ){
        return <div id="score" style={{color : "orange"}}> {this.props.score}</div>
        }
        else{
            return <div id="score" style={{color : "red"}}> {this.props.score}</div>
        }
    }
    render() {
        return (
            <div id="score">{this.checkScore()}</div>
        )
    }
}

export default Score