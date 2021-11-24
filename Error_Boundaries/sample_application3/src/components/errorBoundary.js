import React, { Component } from 'react'


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <p> {this.state.error && this.state.error.toString()}</p>
                </div>
            );
        }

        return this.props.children;
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    handleClick = () => {
        this.setState(({ counter }) => ({
            counter: counter + 1
        }));
    }

    render() {
        if (this.state.counter === 5) {
            throw new Error('I am crashed here');
        }
        return (
            <>
                <button onClick={this.handleClick}>Click Me</button>
                <h1 >{this.state.counter}</h1>
            </>
        )
    }
}

export {
    ErrorBoundary,
    Counter
}