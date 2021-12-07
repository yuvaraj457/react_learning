import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUserData } from '../action/action';

class PersonList extends Component {
    render() {
        const data = this.props.state
        return (
            <div>
                <h2>Employee List</h2>
                <button onClick={() => this.props.fetchUserData()}>click</button>
                <ul>
                    {data && data.userData.map((item, index) => <li key={index}>{item.name}</li>)}
                </ul>

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return { state }
}


const mapDispatchToProps = dispatch => {
    return { fetchUserData: () => dispatch(fetchUserData()) }
}


export default connect(mapStateToProps, mapDispatchToProps)(PersonList)