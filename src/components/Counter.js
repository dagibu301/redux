import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import {
  increment,
  incrementByNumber,
  decrement,
  toggleCounter,
} from '../store/';

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const incrementByNumberHandler = () => {
    dispatch(incrementByNumber(5));
  };

  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {showCounter && (
        <div>
          <div className={classes.value}>{counter}</div>

          <div className={classes.buttons}>
            <button onClick={incrementHandler}>+</button>
            <button onClick={incrementByNumberHandler}>
              + 5
            </button>
            <button onClick={decrementHandler}>-</button>
          </div>
        </div>
      )}

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

/* class Counter extends React.Component {
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>

        {this.props.showCounter && (
          <div>
            <div className={classes.value}>{this.props.counter}</div>

            <div className={classes.buttons}>
              <button onClick={this.props.increment}>+</button>
              <button onClick={this.props.increaseByNumber}>+ 5</button>
              <button onClick={this.props.decrement}>-</button>
            </div>
          </div>
        )}

        <button onClick={this.props.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    showCounter: state.showCounter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    increaseByNumber: () => dispatch({ type: 'INCREMENT_BY_NUMBER', payload: 5 }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    toggleCounterHandler: () => dispatch({ type: 'TOGGLE_COUNTER' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter); */

export default Counter;
