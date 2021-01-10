import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import StoreProvider from "./store/StoreProvider";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Header />
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Menu />
            <Content />
          </div>
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
