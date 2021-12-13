import React, { Component } from 'react'
import axios from 'axios'

import UserList from '../components/userList'
import SearchUser from '../components/searchUser'

const userContainer = WrappedComponent => {
    return class extends Component{
        state = {
            userData : []
        }

        componentDidMount(){
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => this.setState({userData : res.data}))
        }

        render(){
            return(
                <WrappedComponent userData={this.state.userData}/>
            )
        }
    }
}

export const UserListContainer = userContainer(UserList)
export const SearchUserContainer = userContainer(SearchUser)
