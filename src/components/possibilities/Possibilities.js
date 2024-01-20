import React from "react";
import s from "./possibilities.module.scss";

const Possibilities = () => {
  return (
    <div className={s.possibilities}>
      <div className={s.possibilities__container}>
        <div className={s.possibilities__wrapper}>
          <div className={s.possibilities_wrapper__items}>
            <div className={s.possibilities_item1}>
              <p>cложный код</p>
              <p>корпоративные</p>
            </div>
            <div className={s.possibilities_item2}>
              <p>landing-page</p>
            </div>
            <div className={s.possibilities_item3}>
              <p>интернет магазины</p>
            </div>
            <div className={s.possibilities_item4}>
              <p>интеграции</p>
              <small>
                Наша компания занимается разработкой программного обеспечения <br />
                и веб-сайтов. Мы предлагаем широкий спектр услуг, включая <br />
                создание сайтов, мобильных приложений, разработку веб <br />
                -приложений, интеграцию с другими сервисами и многое другое.
              </small>
            </div>
            <div className={s.possibilities_item5}>
              <p>доработки</p>
              <p>AND</p>
            </div>
            <div className={s.possibilities_item6}>
              <p>маркетинг</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Possibilities;
