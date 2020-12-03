import React, { Component } from 'react'
import Name from './Name';

export default class Main1 extends Component {
    constructor(props){
        super(props)
        this.state={
            name: "shehla",
            greetings: "welcome here"
        }
    }
    render() {
        return (
            <div>
                <Name name={this.state.name}  />
            </div>
        )
    }
}
