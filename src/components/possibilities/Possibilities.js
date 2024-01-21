import React from "react";
import s from "./possibilities.module.scss";

const Possibilities = () => {
  return (
    <section className={s.possibilities}>
      <div className={s.possibilities__container}>
        <div className={s.figure__bottom}></div>
        <div className={s.figure__left}></div>
        <div className={s.possibilities__wrapper}>
          <div className={s.possibilities_wrapper__items}>
            <div className={s.possibilities_item1}>
              <div>cложный код</div>
              <p>корпоративные</p>
            </div>
            <div className={s.possibilities_item2}>
              <div>landing-page</div>
            </div>
            <div className={s.possibilities_item3}>
              <div>интернет магазины</div>
              <p></p>
            </div>
            <div className={s.possibilities_item4}>
              <div className={s.item4}><div>интеграции</div></div>
              <p>
                Наша компания занимается разработкой программного обеспечения <br />
                и веб-сайтов. Мы предлагаем широкий спектр услуг, включая <br />
                создание сайтов, мобильных приложений, разработку веб <br />
                -приложений, интеграцию с другими сервисами и многое другое.
              </p>
            </div>
            <div className={s.possibilities_item5}>
              <div>доработки</div>
              <p>AND</p>
            </div>
            <div className={s.possibilities_item6}>
              <div>маркетинг</div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Possibilities;
