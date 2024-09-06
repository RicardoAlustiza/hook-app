import {useCounter} from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter();

  return (
    <>
        <h3>CounterWithCustomHook:  {counter}</h3>

        <hr />

        <button className="btn btn-primary" onClick={increment}>+1</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
        <button className="btn btn-primary" onClick={decrement}>-1</button>
    </>
  )
}
