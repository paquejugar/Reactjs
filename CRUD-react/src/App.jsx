import { useState } from "react";
import InputSection from "./components/InputSection";
import ShowItems from "./components/showItems";
import ResetList from "./components/ResetList";
import UpdateListItem from "./components/UpdateListItem";

function App() {

  const [listItem, setListItem] = useState([]);
  const [updateSection, setUpdateSection] = useState(false);
  const [editText, setEditText] = useState(null);

  function handleAddItem(item) {
    const newItem = {
      id: listItem.length + 1,
      text: item
    };

    setListItem ((prev) => [...prev, newItem])
  }

  function handleResetList() {
    if (listItem.length === 0) {
      alert("List already empty");
      return;
    }
 
    setListItem([]);
  }

  function handleUpdateList(item) {
    setUpdateSection(true);

    setEditText(item);
  }

  function handleUpdateText(newText) {
    if (newText.trim() === ""){
      alert("Text must not be empty...")
      return;
    }
    
    setListItem((current) =>
      current.map((text)=>
      text.id === editText.id ? {...text, text: newText} : text)
    )

    setUpdateSection(false);
    setEditText(null);
  }
  
  return ( 
    <>
      <div className="main">
        <h1>CRUD REACT APP</h1>
        <InputSection item={handleAddItem} />

        {listItem.length === 0 ? <p>No tasks yet...</p>
        : <ShowItems data={listItem} onUpdate={handleUpdateList} />
        }
        <ResetList onReset={handleResetList} />
        {updateSection === false ? <p>update section</p>
          : <UpdateListItem key={editText.id} text={editText.text} onUpdateSubmit={handleUpdateText} />
        };

      </div>
    </>
   );
}

export default App;