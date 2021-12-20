import React, { Component } from 'react'
import { Login } from '../component.js/login'
import { login } from '../core/apiCalls'
import { setAuthToken } from '../shared/authToken'

export default class LoginContainer extends Component {
    constructor(){
        super()
        this.state = {
            formData : {}
        }
    }

    formHandler = e => {
        this.setState({
            formData : {...this.state.formData, [e.target.name] : e.target.value}
        })
    }

    formSubmit = e => {
        e.preventDefault()
        login(this.state.formData)
        .then((res) => setAuthToken(res.token))
        .catch(error => console.log(error))
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Login formHandler={this.formHandler} formSubmit={this.formSubmit}/>
            </div>
        )
    }
}
