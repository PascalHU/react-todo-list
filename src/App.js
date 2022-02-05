import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/Input";
import Task from "./components/Task";
import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faTrashAlt);

function App() {
  const [taskList, setTaskList] = useState([
    { taskname: "aaa", check: true },
    { taskname: "bbb", check: false },
  ]);

  return (
    <div>
      <Header />
      <div className="to-do">
        <div className="task-list">
          {taskList.map((elem, index) => {
            return (
              <Task
                key={index}
                task={elem}
                index={index}
                setTaskList={setTaskList}
                taskList={taskList}
              />
            );
          })}
        </div>
        <Input setTaskList={setTaskList} taskList={taskList} />
      </div>

      <Footer
        language="https://fr.reactjs.org/"
        where="https://www.lereacteur.io/"
        who="https://github.com/PascalHU/"
      />
    </div>
  );
}

export default App;
