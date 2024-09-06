import { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

const heavyProcess = ( iterations ) => {
    for ( let i = 0; i < iterations; i++ ) {
        console.log('Ahí vamos...');
    }

    return `${ iterations } iteraciones realizadas.`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(4000);
    const [ show, setShow ] = useState(true);

    const memorizeValue = useMemo(() => heavyProcess( counter ), [ counter ]);
 
  return (
    <>
        <h1>Counter:  <small>{ counter }</small></h1>
        <hr />

        <p>{ memorizeValue }</p>

        <button
            className="btn btn-primary"
            onClick={ increment }
        >  +1  
        </button>
        <button
            className="btn btn-outline-primary ml-3"
            onClick={ () => {
                setShow( !show );
            }}
        >
            Show/Hide { JSON.stringify( show ) }
        </button>
    </>
  )
}
