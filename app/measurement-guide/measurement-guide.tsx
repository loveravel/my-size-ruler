import React from "react";
import cn from "classnames";
import Logo from "~/components/Logo/Logo";
import Button from "~/components/Button/Button";
import ButtonBack from "~/components/ButtonBack/ButtonBack";
import videoSrc from "/public/videos/measurement.mp4?url";
import styles from "./measurement-guide.module.scss";

const MeasurementScreen = () => {
  return (
    <main className={"top-line top-line--common"}>
      <div className={"lighting lighting--left-bottom lighting--right-top"}/>
      <div className={"stars stars--right-bottom"}/>

      <div className="main-inner">
        <ButtonBack className={styles.back} />

        <Logo/>

        <p className={cn("paragraph", styles.text)}>
          Используйте стрелки, чтобы сопоставить ширину на экране с шириной вашего <b>эрегированного</b> полового члена.
        </p>

        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={{width: "163px", height: "auto"}}
        />

        <Button href={"/measurement"} className={styles.button} variant={"secondary"}>Хорошо</Button>
      </div>
    </main>
  );
};

export default MeasurementScreen;