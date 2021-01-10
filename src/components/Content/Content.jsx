import React from "react";
import Task from "./Task";
import bemCssModule from "bem-css-modules";

import { default as ContentStyles } from "./Content.module.scss";
import { Route, Switch } from "react-router-dom";
import DoneTask from "./DoneTask";
import AddTask from "./AddTask";

const style = bemCssModule(ContentStyles);

const tasks = [
  { id: 1, content: "wykonać prace na studia", date: "14.02.2021" },
  { id: 2, content: "zadzwonić do lekarza", date: "15.01.2021" },
  { id: 3, content: "pójśc na siłownie", date: "13.01.2021" },
];

const Content = () => {
  return (
    <main className={style()}>
      <Switch>
        <Route exact path="/" render={() => <Task tasks={tasks} />} />
        <Route
          exact
          path="/task-done"
          render={() => <DoneTask tasks={tasks} />}
        />
        <Route exact path="/add-task" render={() => <AddTask />} />
      </Switch>
    </main>
  );
};

export default Content;
