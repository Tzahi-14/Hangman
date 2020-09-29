import Letter from "./Letter";
import React, { Component } from 'react';

class Letters extends Component {
    render() {
        return (
            <div id="string">
                <em >Your ideal mood when coding</em>
                <div>Available letters</div> 
                <Letter />
                </div>)
    }
}
export default Letters