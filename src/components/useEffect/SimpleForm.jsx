import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: 'ricardo',
        email: 'test@test.com'
    })

    const { name, email } = formState

    const onInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    useEffect(() => {
        console.log('Hey!')
    }, [formState])

    return (
    <>
        <h1>SimpleForm</h1>
        <hr/>

        <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your name"
            value = {name}
            onChange={onInputChange}
        />

        <input
            type="email"
            name="email"
            className="form-control mt-2"
            placeholder="Your email"
            value = {email}
            onChange={onInputChange}
        />

        {name === 'ricardo2' && <Message />}
    </>
    )
}
