import React, { Component } from 'react'

export default class LifeStyle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'I am calling from Contructor, Wait for 5 sec',
            call: 'I am not called',
            show: false
        }
    }

    static getDerivedStateFromProps(props, state) {
        return { call: 'Iam Called' }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: "I am called from componentDidMount" })
        }, 5000)
    }

    shouldComponentUpdate() {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('previous-state').innerHTML = "The previous call ===>" + prevState.name
    }

    componentDidUpdate() {
        document.getElementById('current-state').innerHTML = "The current call ==>" + this.state.name
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.call}</p>
                <p id="current-state"></p>
                <p id="previous-state"></p>


                <button onClick={() => this.setState({ show: !this.state.show })}> Click Me </button>
                <p>{this.state.show && <Child/>}</p>
            </div>
        )
    }
}

export class Child extends Component {
    render() {
        return (
            <>
                <p>I am a child of LifeCycle Component</p>
            </>
        )
    }
}
