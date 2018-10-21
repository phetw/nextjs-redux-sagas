import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import { increment, decrement, reset } from '../actions'

class Home extends Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx
    store.dispatch(tickClock(isServer))

    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }

    return { isServer }
  }

  increment = () => {
    this.props.dispatch(increment())
  }

  decrement = () => {
    this.props.dispatch(decrement())
  }

  reset = () => {
    this.props.dispatch(reset())
  }

  render() {
    const { count = 0 } = this.props
    return (
      <Fragment>
        <h3>{count}</h3>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quis exercitationem placeat suscipit quibusdam adipisci, rem inventore provident. Ad praesentium tempora ut sapiente eos,
          asperiores rerum illum adipisci odit doloribus cum quidem numquam non, hic nostrum. Est et illo non.
        </p>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({ count: state.count })

export default connect(mapStateToProps)(Home)
