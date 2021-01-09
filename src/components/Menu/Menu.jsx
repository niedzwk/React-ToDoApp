import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import bemCssModule from "bem-css-modules";

import { default as MenuStyles } from "./Menu.module.scss";
import { StoreContext } from "../../store/StoreProvider";

const style = bemCssModule(MenuStyles);

const Menu = () => {
  const { isActive } = useContext(StoreContext);

  return (
    <nav className={isActive ? style() : style("disable")}>
      <ul>
        <li className={style("link")}>
          <NavLink exact to="/">
            DO ZROBIENIA
          </NavLink>
        </li>
        <li className={style("link")}>
          <NavLink exact to="/task-done">
            ZROBIONE
          </NavLink>
        </li>
        <li className={style("link")}>
          <NavLink exact to="/add-task">
            DODAJ ZADANIE
          </NavLink>
        </li>{" "}
      </ul>
    </nav>
  );
};

export default Menu;
