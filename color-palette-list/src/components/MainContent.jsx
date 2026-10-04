import { useState } from "react";

function MainContent() {
    const [color, setColor] = useState("#000000");
    const [colorList, setColorList] = useState([]);
    const [purpose, setPurpose] = useState("");

  

    function handleAddColor() {
        if (purpose.trim() === "") return;

        const newColorItem = {
        id: crypto.randomUUID(),
        purpose: purpose,
        color: color
        };

        setColorList([...colorList, newColorItem]);
        setPurpose("");
    };
    return ( 
        <>
            <div className="layout">
                <h1>Color Palette List</h1>
    
                <input 
                type="color" 
                className="color"
                value={color}
                onChange={(e) => setColor(e.target.value)} 
                />
                <p>{color}</p>
                <label>Purpose:
                    <input
                    type="text"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                /></label>
                <button type="button" onClick={handleAddColor}>Add to Palette</button>

                <ul>
                    {colorList.map((list =>
                    <li key={list.id}>
                        {list.purpose}  {list.color}
                        <div className="list-color" style={{backgroundColor: list.color}}></div>
                    </li>
                    ))}
                </ul>
                

            </div>
        </>
    );
}

export default MainContent;