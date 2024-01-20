import React from "react";
// import s from "./mainPage.module.scss";
import MainVideo from "./../../components/mainVideo/MainVideo";
import Merits from "../../components/merits/Merits";
import Possibilities from "../../components/possibilities/Possibilities";

const Main = () => {
  return (
    <>
        <MainVideo />
        <Merits />
        <Possibilities />
    </>
  );
};

export default Main;
