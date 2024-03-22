import { useSelector } from "react-redux";
import store from "../../store";
import { increment, decrement, reset } from "./counterReducer";
import { useDispatch } from "react-redux";
function CounterRedux() {
    const count = useSelector((store: any) => store.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter Redux</h1>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment(10))}>Increment</button>
            <button onClick={() => dispatch(decrement(10))}>Decrement</button>
            <button onClick={() => dispatch(reset(20))}>Reset</button>

        </div>
    );
}

export default CounterRedux;