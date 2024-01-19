import React from "react";
import s from "./mainPage.module.scss"
import MainVideo from './../../components/mainVideo/MainVideo'

const Main = () => {
  return (
    <section className={s.main}>
        <MainVideo />
    </section>
  );
};

export default Main;
