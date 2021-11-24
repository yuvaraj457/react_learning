import React, { Component } from 'react'

import API from '../apiCall/apiCall'

export default class PersonInformation extends Component {
    constructor(){
        super()
        this.state = {
            personId : '',
            isSubmitted : false,
            personInfo : []
        }
    }

    handler = e => {
        this.setState({personId : e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        API.get(`users/${this.state.personId}`)
        .then((res) => {
            const personInfo  = res.data
            this.setState({personInfo})})
        .catch((error) => console.log(error))
        this.setState({...this.state,isSubmitted : true})
        setTimeout(() => this.setState({isSubmitted : false}), 5000)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <fieldset>
                        <label><p>Enter the Id</p></label>
                        <input name="id" onChange={this.handler}/>
                        <button type="submit">Click Me</button>
                    </fieldset>
                </form>
                <ul>
                    {this.state.isSubmitted && 
                    [this.state.personInfo].map((item, index) => <><li>{item.name}</li><li>{item.email}</li></>)
                    }
                </ul>
            </div>
        )
    }
}
