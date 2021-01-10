import React, { useContext } from "react";
import bemCssModule from "bem-css-modules";

import { default as TaskStyles } from "./Task.module.scss";
import { StoreContext } from "../../store/StoreProvider";

const style = bemCssModule(TaskStyles);

const Task = (props) => {
  const { tasks, setTasks } = useContext(StoreContext);

  const taskToBeDone =
    tasks !== null && tasks.length >= 0
      ? tasks.filter((task) => !task.done)
      : null;

  const handleCheck = (id) => {
    console.log(id);

    const taskArray = tasks.map((task) => {
      if (task.id === id) task.done = true;
      return task;
    });

    setTasks(taskArray);

    localStorage.setItem("task", JSON.stringify(taskArray));
  };

  const task =
    taskToBeDone !== null && taskToBeDone.length >= 0
      ? taskToBeDone.map(
          (task) => (
            <div key={task.id} className={style()}>
              <p>{task.name}</p>
              <p>{task.date}</p>
              <div className={style("icons")}>
                <i
                  class="fas fa-check"
                  onClick={() => handleCheck(task.id)}
                ></i>
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash-alt"></i>
              </div>
            </div>
          )
          // }
        )
      : "Brak zadań do wykoniania";

  return <>{task}</>;
};

export default Task;
