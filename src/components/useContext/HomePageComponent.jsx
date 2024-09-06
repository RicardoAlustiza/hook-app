import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const HomePageComponent = () => {

  const {user} = useContext( UserContext )

  return (
    <>
      <h1>Home Page {user?.name}</h1>
      <hr/>

      <pre aria-label="pre">
        {JSON.stringify(user, null, 2)}
      </pre>

    </>
  )
}
  