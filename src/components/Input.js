import { useState } from "react";
import "./input.css";
const Input = ({ taskList, setTaskList }) => {
  const [taskToAdd, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newList = [...taskList];
    newList.push({ taskname: taskToAdd, check: false });
    setTaskList(newList);
  };
  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        id="task"
        type="text"
        onChange={(event) => setTask(event.target.value)}
        placeholder="new task"
      />
      <input type="submit" value="Add Task" />
    </form>
  );
};

export default Input;
