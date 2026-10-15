import React, { useEffect, useRef } from 'react'
import Breadcrumb from '../../../shared/header/Breadcrumb'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from '../../../../store/features/counter/counterSlice'

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [amount, setAmount] = React.useState(0);

    const countValue = useRef(0)

    function handleIncrement() {
        // Dispatch an action to increment the counter
        // store.dispatch(increment());
        dispatch(increment())
        countValue.current = countValue.current + 1;
        console.log('Count after increment:', countValue.current);
    }

    function handleDecrement() {
        dispatch(decrement())
    }

    function handleReset() {
        dispatch(reset())
    }

    function handleIncrementByAmount() {
        dispatch(incrementByAmount(Number(amount)))
    }
    // useEffect(() => {
    //     // This effect will run whenever the count changes
    //     console.log('Count has changed:', count);
    // }, [count]);

    return (
        <>
            <Breadcrumb pgTitle="Counter"></Breadcrumb>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <button
                            aria-label="Increment value"
                            className=' comn-btn gradient-btn '
                            onClick={handleIncrement}
                        >
                            Increment
                        </button>
                    </div>
                    <div className="col-12 py-3 text-center">
                        <h3 className="form-label m-0">Count: {count}</h3>
                    </div>
                    <div className="col-12 text-center">
                        <button
                            aria-label="Decrement value"
                            className=' comn-btn gradient-btn'
                            onClick={handleDecrement}
                        >
                            Decrement
                        </button>
                        <button
                            aria-label="Reset value"
                            className=' comn-btn gray-btn ms-2'
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                    </div>
                    <div className="col-12 mt-3 ">
                        <div className="row gx-3 gy-2 align-items-center justify-content-center">
                            <div class="col-sm-3">
                                <input 
                                    type="number" 
                                    placeholder="Enter increment amount" 
                                    className="form-control"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                             <div class="col-sm-3">
                                <button className="comn-btn gradient-btn" onClick={handleIncrementByAmount}>
                                    Increment by Amount
                                </button>
                             </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
