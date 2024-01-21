import React, { useState } from "react";
import s from "./sideBar.module.scss";
import logo from "./../../assets/img/logo.png";
import Navigation from "../navigation/Navigation";

// export const Context = React.createContext()

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className={s.sidebar}>
        <div className={s.sidebar__container}>
          <div className={s.logo}>
            <a className={s.logo__link} href="/">
              <img className={s.logoLink__img} src={logo} alt="" />
            </a>
          </div>

          <div className={s.acivateSidebar}>
            <button onClick={() => setOpenMenu(true)} className={s.acivateSidebar__link}/>
          </div>
        </div>
      </div>
      <Navigation openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default SideBar;
