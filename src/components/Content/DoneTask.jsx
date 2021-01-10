import React, { useContext } from "react";
import bemCssModule from "bem-css-modules";

import { default as DoneTaskStyles } from "./Task.module.scss";
import { StoreContext } from "../../store/StoreProvider";

const style = bemCssModule(DoneTaskStyles);

const DoneTask = (props) => {
  const { tasks, setTasks } = useContext(StoreContext);

  const taskToBeDone =
    tasks !== null && tasks.length >= 0
      ? tasks.filter((task) => task.done)
      : null;

  const handleDeleteTask = (id) => {
    const taskArray = tasks.filter((task) => task.id !== id);

    setTasks(taskArray);

    localStorage.setItem("task", JSON.stringify(taskArray));
  };

  const task =
    taskToBeDone !== null && taskToBeDone.length >= 0
      ? taskToBeDone.map((task) => (
          <div key={task.id} className={style()}>
            <p>{task.name}</p>
            <p>{task.date}</p>
            <div className={style("icons")}>
              <i
                class="fas fa-trash-alt"
                onClick={() => handleDeleteTask(task.id)}
              ></i>
            </div>
          </div>
        ))
      : "Brak wykonanych zadań";

  return <>{task}</>;
};

export default DoneTask;
