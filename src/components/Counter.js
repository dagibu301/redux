import React from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: 'INCREMENT' });
  const increaseByNumber = () =>
    dispatch({ type: 'INCREMENT_BY_NUMBER', payload: 5 });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const toggleCounterHandler = () => dispatch({ type: 'TOGGLE_COUNTER' });

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {showCounter && (
        <div>
          <div className={classes.value}>{counter}</div>

          <div className={classes.buttons}>
            <button onClick={increment}>+</button>
            <button onClick={increaseByNumber}>+ 5</button>
            <button onClick={decrement}>-</button>
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
