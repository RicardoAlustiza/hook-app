import { useEffect, useState } from "react"

export const Message = () => {

  const [coords, setCoods] = useState({ x: 0, y: 0 })
  
  useEffect(() => {  
    
    const onMouseMove = (e) => {
      setCoods({ x: e.x, y: e.y })
    }

    window.addEventListener('mousemove', onMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
        <h3>Usuario ya existe</h3>
        {JSON.stringify(coords)}
    </>
  )
}
