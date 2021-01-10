import React from "react";
import bemCssModule from "bem-css-modules";

import { default as DoneTaskStyles } from "./Task.module.scss";

const style = bemCssModule(DoneTaskStyles);

const DoneTask = (props) => {
  const task = props.tasks.map((task) => (
    <div key={task.id} className={style()}>
      <p>{task.content}</p>
      <p>{task.date}</p>
    </div>
  ));

  return <>{task}</>;
};

export default DoneTask;
