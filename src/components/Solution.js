import Letter from "./Letter";
import React, { Component } from 'react';


class Solution extends Component {
    render() {
        const arr = ["_ ","_ ","_ ","_ "]
        return (
            <div id="solution">{arr.map(underScore =><span>{underScore}</span>)}</div>)
    }
}
export default Solution