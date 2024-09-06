import { useEffect, useState } from "react"
import { useForm } from "../../hooks/useForm"

export const FormWithCustomHook = () => {
 
    const {formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    })

    //const {username, email, password} = formState

    return (
    <>
        <h1>Form with custom hook</h1>
        <hr/>

        <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Your name"
            value = {username}
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

        <input
            type="password"
            name="password"
            className="form-control mt-2"
            placeholder="Password"
            value = {password}
            onChange={onInputChange}
        />

        <button className="btn btn-primary mt-2" onClick={onResetForm}>Reset</button>
    </>
    )
}
