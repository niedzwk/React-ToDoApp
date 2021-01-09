import React, { useContext } from "react";
import bemCssModule from "bem-css-modules";

import { default as HeaderStyles } from "./Header.module.scss";
import { StoreContext } from "../../store/StoreProvider";

const style = bemCssModule(HeaderStyles);

const Header = () => {
  const { isActive, setIsActive } = useContext(StoreContext);

  const handleHamburger = (event) => {
    setIsActive((prev) => !prev);
    console.log(isActive);
  };

  return (
    <div className={style()}>
      <span className={style("hamburger")} onClick={handleHamburger}>
        <i className={isActive ? "fas fa-times active" : "fas fa-bars"}></i>
      </span>
      <span className={style("title")}>ToDoList</span>
    </div>
  );
};

export default Header;
