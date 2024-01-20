import React from "react";
import s from "./merits.module.scss";
import orangeImg from "../../assets/img/Vector-Orange.png";
import purpleImg from "../../assets/img/Vector-Purple.png";
import blueImg from "../../assets/img/Vector-Blue.png";

const Merits = () => {
  return (
    <section className={s.merits}>
      <div className={s.merits__container}>
        <div className={s.merits__wrapper}>
          <div className={s.merits_text}>
            <div className={s.merits_text_items}>
              <div className={s.merits_text_item}>большой опыт.</div>
              <div className={s.merits_text_item}>передовые технологии. </div>
              <div className={s.merits_text_item}>
                высокое качество продукта.
              </div>
              <div className={s.merits_text_item}>реализация.</div>
            </div>

            <small>
              Придумываем и воплощаем в реальность даже самые <br />
              сложные идеи наших клиентов
            </small>
          </div>

          <div className={s.merits__titles}>
            <div className={s.title__items}>
              <div className={s.title__item}>
                <div className={s.title_item__img_conteiner}>
                  <img className={s.title_item__img} alt="" src={orangeImg} />
                </div>
                <p className={s.title_item__text}>
                  участник программы качества внедрения
                </p>
              </div>

              <div className={s.title__item}>
                <div className={s.title_item__img_conteiner}>
                  <img className={s.title_item__img} alt="" src={purpleImg} />
                </div>
                <p className={s.title_item__text}>АТТЕСТОВАННЫЙ РАЗРАБОТЧИК</p>
              </div>

              <div className={s.title__item}>
                <div className={s.title_item__img_conteiner}>
                  <img className={s.title_item__img} alt="" src={blueImg} />
                </div>
                <p className={s.title_item__text}>
                  УЧАСТНИК ПРОГРАММЫ КАЧЕСТВА ВНЕДРЕНИЯ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merits;
