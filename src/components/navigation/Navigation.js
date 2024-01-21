import React from "react";
import s from "./navigation.module.scss";
import logoImg from "./../../assets/img/logo.svg";
import rutegoImg from "./../../assets/img/rutego.svg";

function Navigation(props) {
    console.log (props.openMenu)
  return (
    <div className={`${s.navigation} ${props.openMenu === false ? s.close : s.open}`}>
      <div className={s.navigation__container}>
        <button onClick={() => props.setOpenMenu(false)} type="button" className={s.navigation__close}></button>
        <div className={s.navigation__wrapper}>
          <div className={s.navigation__logo}>
            <img className={s.logo__img} src={logoImg} alt="" />
            <img className={s.logo__img} src={rutegoImg} alt="" />
          </div>

          <div className={s.navigation__buttons}>
            <button
              className={s.navigation__button}
              type="button"
              value="Маркетинг"
            >
              <p className={s.button__icon}></p>
              Маркетинг
            </button>
            <button
              className={s.navigation__button}
              type="button"
              value="Разработка"
            >
              <p className={s.button__icon}></p>
              Разработка
            </button>
            <button
              className={s.navigation__button}
              type="button"
              value="Поддержка"
            >
              <p className={s.button__icon}></p>
              Поддержка
            </button>
          </div>

          <div className={s.navigationButtom__buttons}>
            <button
              className={s.navigationButtom__buttonPersonal}
              type="button"
              value="Личный кабинет"
            >
              <p className={s.button__iconPersonal}></p>
              Личный кабинет
            </button>
            <button
              className={s.navigationButtom__buttonOrder}
              type="button"
              value="заказать"
            >
              Заказать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
