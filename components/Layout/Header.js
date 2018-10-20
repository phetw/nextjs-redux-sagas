import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const HeaderContainer = styled.nav`
  position: sticky;
  top: 0;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 999;
  opacity: 0.975;
  box-shadow: 0 1px 10px 1px rgba(40, 41, 44, 0.12);
  transition: background-color 300ms ease;
  background-color: ${props => (props.dark ? 'black' : 'white')};
  a {
    color: ${props => (!props.dark ? 'black' : 'white')};
    &:hover {
      border-bottom: 2px solid ${props => (!props.dark ? '#222' : 'white')};
    }
  }
`
const StyledNextLink = styled.a`
  color: #222;
  cursor: pointer;
  margin: 0 1rem;
  text-decoration: none;
  font-family: 'Roboto Mono Bold';
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    border-bottom: 2px solid #222;
  }
`

const NextLink = ({ href, children }) => (
  <Link href={href}>
    <StyledNextLink>{children}</StyledNextLink>
  </Link>
)

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer dark={this.props.isDarkTheme}>
        <NextLink href="/">Home</NextLink>
        <NextLink href="/about">About</NextLink>
      </HeaderContainer>
    )
  }
}
