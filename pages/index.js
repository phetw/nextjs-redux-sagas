import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { requestUsers } from '../actions'
import UserList from '../components/UserList'

class Home extends Component {
  static async getInitialProps(props) {}

  componentDidMount() {
    this.props.dispatch(requestUsers())
  }

  render() {
    return (
      <Fragment>
        <h3>Top 30 Thailand 🇹🇭 - based developer</h3>
        <ul>
          <li>sort by followers</li>
          <li>with atleast 50 repos</li>
        </ul>
        <UserList />
      </Fragment>
    )
  }
}

export default connect()(Home)
