import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LogInPageComponent = () => {

  const {user, setUser} = useContext( UserContext )
  
  return (
    <>
      <h1>LogIn Page</h1>
      <hr/>

      <pre aria-label="pre">
        {JSON.stringify(user, null, 2)}
      </pre>

      <button className="btn btn-primary" onClick={ () => setUser({id: '123', name: 'Juan', email: 'juan@gmail.com'}) }>
        Establecer usuario
      </button>
    </>
  )
}
  