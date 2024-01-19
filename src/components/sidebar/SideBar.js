import React from "react";
import s from "./sideBar.module.scss";
import logo from "./../../assets/img/logo.png";
import acivateSidebar from "./../../assets/img/sidebar.png";

const SideBar = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.sidebar__container}>
        <div className={s.logo}>
          <a className={s.logo__link} href="/">
            <img className={s.logoLink__img} src={logo} alt="" />
          </a>
        </div>

        <div className={s.acivateSidebar}>
          <a className={s.acivateSidebar__link} href="/#" >
            <img className={s.acivateSidebar__img} src={acivateSidebar} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
