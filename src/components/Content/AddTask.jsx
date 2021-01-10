import React, { useContext, useState } from "react";
import bemCssModule from "bem-css-modules";

import { default as AddTaskStyles } from "./AddTask.module.scss";
import { StoreContext } from "../../store/StoreProvider";

const style = bemCssModule(AddTaskStyles);

const AddTask = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [taskImportant, setTaskImportant] = useState(false);

  const { tasks, setTasks } = useContext(StoreContext);

  const handleTaskName = (event) => {
    setTaskName(event.target.value);
  };

  const handleTaskDate = (event) => {
    setTaskDate(event.target.value);
  };

  const handleTaskImportant = () => {
    setTaskImportant((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName.length < 5)
      alert("Wprowadz poprawną nazwę. Minimalna liczba znaków to 5");
    else {
      let id = localStorage.getItem("id");

      if (id === null) id = 1;

      const task = {
        id,
        name: taskName,
        date: taskDate,
        important: taskImportant,
        done: false,
      };

      let tasksArray;

      // id++;

      if (tasks === null) {
        tasksArray = [task];
      } else {
        tasksArray = [...tasks, task];
      }

      setTasks(tasksArray);

      localStorage.setItem("task", JSON.stringify(tasksArray));
      localStorage.setItem("id", JSON.stringify(++id));

      setTaskName("");
      setTaskDate(new Date().toISOString().slice(0, 10));
      setTaskImportant(false);
    }
  };

  return (
    <div className={style()}>
      <form className={style("form")}>
        <label className={style("label")}>
          <p>Zadanie</p>
          <input
            type="text"
            name="taskName"
            value={taskName}
            placeholder="Proszę podać zadanie."
            onChange={handleTaskName}
            className={style("textinput")}
          />
        </label>
        <label className={style("label")}>
          <p>Data</p>
          <input
            type="date"
            name="taskDate"
            min={new Date().toISOString().slice(0, 10)}
            value={taskDate}
            onChange={handleTaskDate}
          />
        </label>
        <label className={style("label")}>
          <p>Ważne</p>
          <input
            type="checkbox"
            name="taskImportant"
            checked={taskImportant}
            onChange={handleTaskImportant}
            className={style("checkbox")}
          />
        </label>
        <button
          type="submit"
          className={style("submit")}
          onClick={handleSubmit}
        >
          Dodaj zadanie
        </button>
      </form>
    </div>
  );
};

export default AddTask;
