import { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef()

    const refFocus = () => {
        inputRef.current.select()
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                type='text'
                placeholder="Your name"
                className="form-control"
                ref={inputRef}
            />

            <button className="btn btn-outline-primary mt-2" onClick={refFocus}>
                Set Focus
            </button>
        </>
    )
}
