import Letter from "./Letter";
import React, { Component } from 'react';

class Letters extends Component {
    // render() {
    //     return (
    //         <div id="string">
    //             <div>Available letters</div>
    //             <div>{Object.keys(this.props.letterStatus).map((letter, index) =>{
    //                 return (this.props.letterStatus[letter]? <Letter class="selected" key={index} letter={letter} /> : <Letter key={index} letter={letter} />)})}
    //             </div>
    //         </div>)
    // }

    render() {
        return (
            <div id="string">
                <div>Available letters</div>
                <div>{Object.keys(this.props.letterStatus).map((letter, index) => {
                    if (this.props.letterStatus[letter]) {
                        return <Letter key={index} letter={letter} class="selected" selectLetter={this.props.selectLetter} />
                    }
                    else{
                        return <Letter key={index} letter={letter} selectLetter={this.props.selectLetter} />
                    }
                })}
            </div>
            </div>)
                
    }
}
export default Letters
