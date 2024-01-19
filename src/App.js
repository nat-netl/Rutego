import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import ms from "./assets/styles/main.module.scss";
import SideBar from "./components/sidebar/SideBar";

const App = () => {
  return (
    <div className={ms.wrapper}>
      <SideBar />
      <div className={ms.wrapper__data}>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
