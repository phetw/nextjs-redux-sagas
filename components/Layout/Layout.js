import React, { Component, Fragment } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import Header from './Header'
import ThemeToggler from './ThemeToggler'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Roboto Mono Regular";
    src: url('../static/fonts/RobotoMono-Regular.ttf')
  }
  @font-face {
    font-family: "Roboto Mono Bold";
    src: url('../static/fonts/RobotoMono-Bold.ttf')
  }
  body {
    margin:0;
    padding:0;
    font-family: 'Roboto Mono Regular';
    transition: background-color 300ms ease;
    background-color: ${props => (props.theme.dark ? 'black' : 'white')}!important;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Roboto Mono Bold';
  }
  p{
    font-family: 'Roboto Mono Regular';
  }
  h1,h2,h3,h4,h5,h6,p,li{
    color: ${props => (props.theme.dark ? 'white' : 'black')};
  }
  button{
    font-family: 'Roboto Mono Bold';
    cursor: pointer;
    border:none;
    &:focus {
      outline:0;
    }
  }
`

const LayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
`

const Content = styled.section`
  margin: 2rem 1.5rem;
`

class Layout extends Component {
  state = {
    isDarkTheme: true
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme
    }))
  }

  render() {
    const { isDarkTheme } = this.state
    return (
      <ThemeProvider theme={{ dark: isDarkTheme }}>
        <Fragment>
          <GlobalStyle />
          <LayoutContainer>
            <Header />
            <ThemeToggler toggle={this.toggleTheme} />
            <Content>{this.props.children}</Content>
          </LayoutContainer>
        </Fragment>
      </ThemeProvider>
    )
  }
}

export default Layout
