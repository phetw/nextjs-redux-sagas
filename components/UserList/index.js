import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Loader from '../Loader'

const UserCount = styled.p``

const UserItem = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
`

const UserLogin = styled.a`
  cursor: pointer;
  color: ${({ theme }) => (theme.dark ? 'white' : 'black')};
  text-decoration: none;
`

const AvatarImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`

class UserList extends Component {
  render() {
    const { loading, users } = this.props
    return loading ? (
      <Loader />
    ) : (
      <Fragment>
        {users.map(({ login, avatar_url, html_url }, id) => (
          <UserItem key={login}>
            <UserCount>{id + 1}. </UserCount>
            <AvatarImg src={avatar_url} alt="github avatar" />
            <UserLogin href={html_url} target="_blank">
              {login}
            </UserLogin>
          </UserItem>
        ))}
      </Fragment>
    )
  }
}

const mapStateToProps = ({ users, loading }) => ({ users: users, loading: loading })

export default connect(mapStateToProps)(UserList)
