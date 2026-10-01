import { useState } from "react";
import "./index.css"


function App() {

  const [color, setColor] = useState("#ff0000")

  function handleChange(e) {
    setColor(e.target.value);
  }

  return (
    <>
      <h1>color picker</h1>
      <div 
      className="card" 
      style={{backgroundColor: color}}></div>

      <input
      type="text"
      value={color}
      onChange={handleChange}>
      </input>
      
    </>
  )
}

export default App;