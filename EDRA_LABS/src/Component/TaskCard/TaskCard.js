import "./TaskCard.css";

const TaskCard = ({ task, taskList, setTaskList, currCard, idx }) => {
  const handleMoveTask = (listIdx, cardIdx, direction) => {
    const updatedTaskList = [...taskList];
    const list = updatedTaskList[listIdx].list;
    if (direction === "up" && cardIdx > 0) {
      [list[cardIdx - 1], list[cardIdx]] = [list[cardIdx], list[cardIdx - 1]];
    } else if (direction === "down" && cardIdx < list.length - 1) {
      [list[cardIdx + 1], list[cardIdx]] = [list[cardIdx], list[cardIdx + 1]];
    }
    setTaskList(updatedTaskList);
  };
  return (
    <div className="main">
      <div>
        <span className="title">Title: </span>
        <span className="title-value">{task?.title || ""}</span>
      </div>
      <div>
        <span className="content">Content: </span>
        <span className="content-value">{task?.content || ""}</span>
      </div>
      <div className="taskCardControls">
        <button
          className="moveButton up"
          onClick={() => handleMoveTask(idx, currCard, "up")}
          disabled={task.isFirst}
        >
          ↑
        </button>
        <button
          className="moveButton down"
          onClick={() => handleMoveTask(idx, currCard, "down")}
          disabled={task.isLast}
        >
          ↓
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
