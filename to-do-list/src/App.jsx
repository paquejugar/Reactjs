import { useState } from "react";

function App() {

  const date = new Date();

  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    if (task === "") return;

    e.preventDefault();

    const newTask = {
      id: taskList.length + 1,
      task: task,
      date: date.toDateString()
    };

    setTaskList([...taskList, newTask]);
  };

  return ( 
    <>
      <div className="flex justify-center p-8">
        <p className="m-0 text-2xl">TO DO LIST</p>
      </div>
      <div className="flex p-8">
        <form action="submit" onSubmit={handleSubmit}>
          <label>
            Enter a task: 
            <input 
            className="bg-slate-100 ml-2 text-black"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            ></input>
          </label>
          <button className="border ml-2 p-2 rounded-2xl hover:bg-red-500">Submit</button>
        </form>
        </div>
      <div className="p-8">
        <ul className="grid grid-cols-3 gap-4">
          {taskList.map((data => 
            <li className="border-2 p-4 border-red-500" key={data.id}>
              {data.id}   {data.task} added: {data.date}
            </li>
        ))}
        </ul>
      </div>
    </>
  );
}

export default App;