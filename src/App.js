import { HashRouter as Router } from "react-router-dom";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import StoreProvider from "./store/StoreProvider";
import bemCssModule from "bem-css-modules";

import { default as AppStyle } from "./App.module.scss";

const style = bemCssModule(AppStyle);

function App() {
  return (
    <div>
      <StoreProvider>
        <Header />
        <Router basename={process.env.PUBLIC_URL}>
          <div className={style()}>
            <Menu />
            <Content />
          </div>
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
