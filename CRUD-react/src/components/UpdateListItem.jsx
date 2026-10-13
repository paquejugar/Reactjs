import { useState } from "react";

function UpdateListItem({text, onUpdateSubmit}) {

    const [newText, setNewText] = useState(text);

    return ( 
        <>
            <section className="container">
                <h3>Update List</h3>
                <label>
                    Change the following text:
                    <input
                        className="input-box"
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    ></input>
                </label>
                <button type="button" className="update-btn" onClick={() => onUpdateSubmit(newText)}>Submit</button>
            </section>
        </>
    );
}

export default UpdateListItem;