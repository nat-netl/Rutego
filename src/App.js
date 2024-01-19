import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import ms from './assets/styles/main.module.scss'
import SideBar from './components/sidebar/SideBar'

const App = () => {
  return (
    <div class={ms.wrapper}>
      <SideBar />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
