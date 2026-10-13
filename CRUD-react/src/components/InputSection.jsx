import { useState } from "react";


function InputSection({item}) {

    const [listInput, setListInput] = useState("");
    

    function handleOnClick( e ) {
        e.preventDefault();
        if (!listInput.trim()) {
            alert("Text must not be Empty...")
            return;
        }

        item(listInput);

        setListInput("");
    }

    return ( 
        <>
            <section>
                <label>
                    Enter an item to add to list:
                    <input
                        type="text"
                        value={listInput}
                        onChange={(e) => setListInput(e.target.value)}
                        className="input-box"
                    ></input>
                </label>
                <button type="button" onClick={handleOnClick} className="input-btn">Add to List</button>
            </section>
        </>    
    );
}

export default InputSection;