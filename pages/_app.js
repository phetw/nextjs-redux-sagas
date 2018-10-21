import React from 'react'
import App, { Container } from 'next/app'

import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

import createStore from '../store'

import Layout from '../components/Layout/Layout'

class MyNextApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }

  componentDidCatch(error, errorInfo) {
    super.componentDidCatch(error, errorInfo)
    /* Do something */
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(createStore)(withReduxSaga({ async: true })(MyNextApp))
