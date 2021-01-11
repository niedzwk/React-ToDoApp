import React from "react";
import Task from "./Task";
import bemCssModule from "bem-css-modules";

import { default as ContentStyles } from "./Content.module.scss";
import { Route, Switch } from "react-router-dom";
import DoneTask from "./DoneTask";
import AddTask from "./AddTask";

const style = bemCssModule(ContentStyles);

const Content = () => {
  return (
    <main className={style()}>
      <Switch>
        <Route exact path="/" render={() => <Task />} />
        <Route exact path="/task-done" render={() => <DoneTask />} />
        <Route exact path="/add-task" render={() => <AddTask />} />
      </Switch>
    </main>
  );
};

export default Content;
