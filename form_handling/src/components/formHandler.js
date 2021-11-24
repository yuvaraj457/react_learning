import React, { Component } from 'react'

export default class FormHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {},
            submitted: false
        }
    }

    handler = e => {
        const ischeckbox = e.target.type === 'checkbox'
        this.setState({
            formData: {...this.state.formData, [e.target.name]: ischeckbox?(e.target.checked?'true':'false' ): e.target.value }
        })

    }

    submitHandler = e => {
        e.preventDefault()
        this.setState({
            ...this.state.formData,
            submitted: true
        })
        setTimeout(() => this.setState({...this.state.formData, submitted: false}), 2000)
        console.log(this.state)
    }


    render() {
        console.log(Object.entries(this.state.formData))
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <fieldset>
                        <label><p>Name</p>
                        <input name='text1' onChange={this.handler} />
                        </label>
                        <label>
                            <p>Country</p>
                            <select name='country' onChange={this.handler}>
                                <option value=''>------</option>
                                <option value="India">India</option>
                                <option value='America'>America</option>
                                <option value='China'>China</option>
                            </select>
                        </label>
                        <label>
                            <p>Pay On Delivery</p>
                            <input type='checkbox' name='payment'onChange={this.handler}/>
                        </label>
                    </fieldset>
                    <button type='submit'>Submit</button>
                    {
                        this.state.submitted &&
                        <ul>
                            {Object.entries(this.state.formData).map(([name, value], index) => <li key={index}>{name} : {value}</li>)}
                        </ul>
                    }
                </form>
            </div>
        )
    }
}
