import React, { Component } from 'react'

export default class ShowTime extends Component {
    constructor(props) { 
        super(props)
        this.state = {date: new Date()};
      }
    render() {
        return (
            <div>
                <h2>Hello world, the time is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
