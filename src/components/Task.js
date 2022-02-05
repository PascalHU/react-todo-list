import "./task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ task, index, setTaskList, taskList }) => {
  const deleteTask = () => {
    const newList = [...taskList];
    for (let i = 0; i < newList.length; i++) {
      if (i === index) {
        newList.splice(i, 1);
      }
    }
    setTaskList(newList);
  };
  const changeCheck = () => {
    const newList = [...taskList];
    if (task.check === false) {
      newList[index].check = true;
    } else {
      newList[index].check = false;
    }
    setTaskList(newList);
  };
  return (
    <div className="task-element">
      {task.check ? (
        <input
          type="checkbox"
          className="checkbox"
          onChange={changeCheck}
          checked={true}
        />
      ) : (
        <input
          type="checkbox"
          className="checkbox"
          onChange={changeCheck}
          checked={false}
        />
      )}

      <label htmlFor="checkbox" className="task">
        {task.taskname}
      </label>
      <span className="delete" onClick={deleteTask}>
        <FontAwesomeIcon icon="trash-alt" />
      </span>
    </div>
  );
};
export default Task;
