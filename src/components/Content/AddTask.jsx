import React from "react";
import bemCssModule from "bem-css-modules";

import { default as AddTaskStyles } from "./AddTask.module.scss";

const style = bemCssModule(AddTaskStyles);

const AddTask = () => {
  return (
    <div className={style()}>
      <form className={style("form")}>
        <label className={style("label")}>
          <p>Zadanie</p>
          <input type="text" name="" id="" />
        </label>
        <label className={style("label")}>
          <p>Data</p>
          <input type="date" name="" id="" />
        </label>
        <label className={style("label")}>
          <p>Ważne</p>
          <input type="checkbox" name="" id="" />
        </label>
        <input
          type="submit"
          value="Dodaj zadanie"
          className={style("submit")}
        />
      </form>
    </div>
  );
};

export default AddTask;
