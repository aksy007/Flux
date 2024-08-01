import { useState } from "react";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskList.css";

const TaskList = ({ taskList, setTaskList }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskContent, setNewTaskContent] = useState("");
  const [currentListIndex, setCurrentListIndex] = useState(null);
  const [draggingItem, setDraggingItem] = useState(null);

  //   Opens the popup to add a new task to the specified list.
  const handleAddTask = (listIndex) => {
    setCurrentListIndex(listIndex);
    setIsPopupOpen(true);
  };

  //   Deletes a task list at the specified index.
  const handleDeleteList = (listIndex) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(listIndex, 1);
    setTaskList(updatedTaskList);
  };

  //   Creates a new task with the current title and content, and adds it to the list.
  const handleCreateTask = () => {
    if (newTaskTitle === "") return;
    const updatedTaskList = [...taskList];
    updatedTaskList[currentListIndex].list.push({
      title: newTaskTitle,
      content: newTaskContent,
    });
    setTaskList(updatedTaskList);
    setIsPopupOpen(false);
    setNewTaskTitle("");
    setNewTaskContent("");
  };

  //   Closes the popup and resets input fields.
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setNewTaskTitle("");
    setNewTaskContent("");
  };

  // Handles the drag start event by setting the current list index and dragging item.

  const handleOnDragStart = (listIdx, cardIdx) => {
    setCurrentListIndex(listIdx);
    setDraggingItem(taskList[listIdx].list[cardIdx]);
  };

  // Prevents the default behavior during a drag over event.
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handles the drop event by moving the dragged item to the target list.
  const handleOnDrop = (targetListIdx) => {
    if (targetListIdx === currentListIndex) return;
    const updatedTaskList = [...taskList];
    // Remove task card from existing list
    updatedTaskList[currentListIndex].list.splice(draggingItem.index, 1);
    // Add task to new drgged list
    updatedTaskList[targetListIdx].list.push(draggingItem);
    setTaskList(updatedTaskList);
  };

  return taskList.map((listItem, idx) => {
    return (
      <div
        onDrop={() => handleOnDrop(idx)}
        className="taskList"
        key={listItem.listTitle + idx}
      >
        <div className="listHeader">
          <div className="listTitle">{listItem.listTitle}</div>
          <div className="listFn">
            <span onClick={() => handleAddTask(idx)}>+</span>
            {"   "}
            <span onClick={() => handleDeleteList(idx)}>-</span>
          </div>
        </div>
        {listItem.list.map((task, index) => (
          <div
            draggable
            onDrag={() => handleOnDragStart(idx, index)}
            onDragOver={handleDragOver}
            key={index}
          >
            <TaskCard
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
              key={index}
              currCard={index}
              idx={idx}
            />
          </div>
        ))}
        {isPopupOpen && currentListIndex === idx && (
          <div className="popup">
            <div>
              <input
                type="text"
                placeholder="Task Title"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Task Content"
                value={newTaskContent}
                onChange={(e) => setNewTaskContent(e.target.value)}
              />
            </div>
            <div>
              <button disabled={newTaskTitle === ""} onClick={handleCreateTask}>
                Create
              </button>
              <button onClick={handleClosePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  });
};

export default TaskList;
