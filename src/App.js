import { useEffect, useState } from "react";
import "./App.css";

const withMousePosition = (WrappedComponent) =>
{
  return (props) =>
  {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0
  })

    useEffect(() =>
    {
      const handleMousePositionChange = (e) =>
      {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        })
      }
      
      window.addEventListener("mousemove", handleMousePositionChange)

      return () =>
      {
        window.removeEventListener("mousemove", handleMousePositionChange)
      }
    }, [])
    
    return <WrappedComponent {...props} mousePosition={mousePosition}/>
  }
}

const PannelMouseLogger = ({ mousePosition }) =>
{
  if(!mousePosition)
  {
    return null
  }
  
  return(
    <div>
      <p>Mouse position: </p>
      <div>
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  )
}

const PointMouseLogger = ({ mousePosition }) =>
{
  if(!mousePosition)
  {
    return null
  }
  
  return(
    <p>({mousePosition.x}, {mousePosition.y})</p>
  )
}

const PannelMouseTracker = withMousePosition(PannelMouseLogger)
const PointMouseTracker = withMousePosition(PointMouseLogger)

function App()
{
  return(
    <div>
      <header>Little Lemon Restaurant</header>
      <PannelMouseTracker/>
      <PointMouseTracker/>
    </div>
  )
}
 
export default App