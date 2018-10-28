import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, createGlobalStyle } from 'styled-components'

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
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Roboto Mono Bold';
  }
  p{
    font-family: 'Roboto Mono Regular';
  }
`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <GlobalStyle />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
