import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increaseByNumber, increment, reset } from './counterSlice';

const CounterView = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count)

    return (
        <div>
            <h1>Counter App using redux/toolkit</h1>
            <h2>count: {count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())} style={{marginLeft: '10px', marginRight: '10px'}}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(increaseByNumber(5))}>IncreaseBy5</button>
        </div>
    );
};

export default CounterView;