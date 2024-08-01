import { useState } from "react";
import "./App.css";
import TaskList from "./Component/TaskList/TaskList";

const defaultTaskList = [
  {
    listTitle: "FirstTaskList",
    list: [
      {
        title: "Task",
        content: "Task Content",
      },
      {
        title: "Task1",
        content: "Task1 Content",
      },
      {
        title: "Task2",
        content: "Task2 Content",
      },
    ],
  },
  {
    listTitle: "First",
    list: [
      {
        title: "First Task",
        content: "Task Content",
      },
      {
        title: "First Task1",
        content: "Task1 Content",
      },
    ],
  },
];

const TaskForm = ({ handleAddList }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    handleAddList(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Create New List"
      />
      <button disabled={value === ""} type="submit">
        {" "}
        Create{" "}
      </button>
    </form>
  );
};

function App() {
  const [taskList, setTaskList] = useState(defaultTaskList);

  const handleAddList = (newListTitle) => {
    setTaskList([...taskList, { listTitle: newListTitle, list: [] }]);
  };

  return (
    <>
      <div>
        <TaskForm handleAddList={handleAddList} />
      </div>
      <div className="App">
        <TaskList taskList={taskList} setTaskList={setTaskList} />
      </div>
    </>
  );
}

export default App;
