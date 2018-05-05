/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './../state/counter';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { actions, value} = this.props;
    return (
      <div>
        <button onClick={actions.onIncrementAsync}>
          Increment after 1 second
        </button>
        {' '}
        <button onClick={actions.onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={actions.onDecrement}>
          Decrement
        </button>
        <hr />
        <div>
          Clicked: {value} times
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators({
        onIncrement: actions.incrementCounter,
        onDecrement: actions.decrementCounter,
        onIncrementAsync: actions.incrementCounterAsync
      }, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)
