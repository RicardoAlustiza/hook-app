import React, { useState } from 'react';

export const CounterApp = () => {
    const [{counter1, counter2, counter3}, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });
  
    return (
        <>
            <h3>UseState CounterApp: {counter1}</h3>
            <h3>UseState CounterApp: {counter2}</h3>
            <h3>UseState CounterApp: {counter3}</h3>
            
            <hr />
            
            <button className="btn btn-primary" onClick={() => setCounter(
                (prevState) => ({...prevState, counter1: counter1 + 1})
            )}>+1</button>
        </>
  )
}
