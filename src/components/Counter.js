import { useDispatch, useSelector } from 'react-redux';
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

export default Counter;
