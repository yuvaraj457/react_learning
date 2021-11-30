import React, { Component } from 'react'
import UserList from '../components/userList'

const userContainer = WrappedComponent => {
    return class extends Component {
        state = {
            searchTerm : '',  
        }

        handler = (e) => {
            this.setState({searchTerm : e.target.value, submit : false})

        }
        
        render() {
            return (
                <>
                <div>
                    <input
                        onChange={  this.handler}
                        placeholder = "Search"
                    />
                    
                </div>
                <WrappedComponent searchTerm={this.state.searchTerm}/>
                </>
            )
        }
    }
}

export const UsersListContainer = userContainer(UserList)