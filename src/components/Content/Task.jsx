import React, { useContext, useState } from "react";
import bemCssModule from "bem-css-modules";

import { default as TaskStyles } from "./Task.module.scss";
import { StoreContext } from "../../store/StoreProvider";

const style = bemCssModule(TaskStyles);

const Task = () => {
  const [popUpIsActive, setPopUpIsActive] = useState(false);
  const [activeId, setActiveId] = useState(0);
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [taskImportant, setTaskImportant] = useState(false);

  const { tasks, setTasks } = useContext(StoreContext);

  const taskToBeDone =
    tasks !== null && tasks.length >= 0
      ? tasks.filter((task) => !task.done)
      : null;

  const handleCheck = (id) => {
    const taskArray = tasks.map((task) => {
      if (task.id === id) task.done = true;
      return task;
    });

    setTasks(taskArray);

    localStorage.setItem("task", JSON.stringify(taskArray));
  };

  const handleDeleteTask = (id) => {
    const taskArray = tasks.filter((task) => task.id !== id);

    setTasks(taskArray);

    localStorage.setItem("task", JSON.stringify(taskArray));
  };

  const handleModifyTask = (id) => {
    setPopUpIsActive(true);
    setActiveId(id);
  };

  const closePopUp = () => {
    setPopUpIsActive(false);
  };

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
      let id = activeId;

      let tasksArray;

      tasksArray = tasks.map((task) => {
        if (task.id === id) {
          task.name = taskName;
          task.date = taskDate;
          task.important = taskImportant;
          task.done = false;
        }
        return task;
      });

      setTasks(tasksArray);

      localStorage.setItem("task", JSON.stringify(tasksArray));

      setTaskName("");
      setTaskDate(new Date().toISOString().slice(0, 10));
      setTaskImportant(false);

      setPopUpIsActive(false);
    }
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
                <i
                  class="fas fa-edit"
                  onClick={() => handleModifyTask(task.id)}
                ></i>
                <i
                  class="fas fa-trash-alt"
                  onClick={() => handleDeleteTask(task.id)}
                ></i>
              </div>
            </div>
          )
          // }
        )
      : "Brak zadań do wykoniania";

  return (
    <>
      {task}
      {popUpIsActive ? (
        <div className={style("background")}>
          <div className={style("popup")}>
            <div className={style("close")} onClick={closePopUp}>
              <i class="fas fa-times"></i>
            </div>
            <form>
              <label>
                <p>Nazwa:</p>
                <input
                  type="text"
                  name="newName"
                  placeholder="Podaj nową nazwę"
                  value={taskName}
                  onChange={handleTaskName}
                />
              </label>
              <label>
                <p>Data:</p>
                <input
                  type="date"
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
                Edytuj zadanie
              </button>
            </form>
          </div>
        </div>
      ) : null}
      ;
    </>
  );
};

export default Task;
