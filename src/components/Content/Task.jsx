import React from "react";
import bemCssModule from "bem-css-modules";

import { default as TaskStyles } from "./Task.module.scss";

const style = bemCssModule(TaskStyles);

const Task = (props) => {
  const task = props.tasks.map((task) => (
    <div key={task.id} className={style()}>
      <p>{task.content}</p>
      <p>{task.date}</p>
      <div className={style("icons")}>
        <i class="fas fa-check"></i>
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>
  ));

  return <>{task}</>;
};

export default Task;
