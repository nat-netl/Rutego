import React from "react";
import s from "./mainVideo.module.scss";
import video from "./../../assets/video/main.mp4";

const MainVideo = () => {
  return (
    <div className={s.mainVideo}>
      <div className={s.mainVideo__container}>
        <div className={s.container__video}>
          <div className={s.background} />

          <video autoPlay muted loop className={s.video__item}>
            <source src={video} type="video/mp4"></source>
          </video>

          
        </div>

        <div className={s.mainText}>
            <div className={s.mainText__container}>
              <div className={s.mainText__title}>
                <div>ядрёные </div>
                <div>сайты</div>
                <div>на ядерном</div>
                <div>коде</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default MainVideo;
