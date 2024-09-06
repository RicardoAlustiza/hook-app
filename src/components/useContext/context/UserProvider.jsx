import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: "John Doe",
//     username: "johndoe123",
//     email: "johndoe@gmail.com",
//     isAdmin: false,
//     password: "password123"
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
