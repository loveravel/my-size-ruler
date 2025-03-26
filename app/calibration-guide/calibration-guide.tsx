import React from "react";
import cn from "classnames";
import Logo from "~/components/Logo/Logo";
import Button from "~/components/Button/Button";
import ButtonBack from "~/components/ButtonBack/ButtonBack";
import videoSrc from "/public/videos/calibration.mp4?url";
import styles from "./calibration-guide.module.scss";

const MeasurementScreen = () => {
  return (
    <main className={"top-line top-line--common"}>
      <div className={"lighting lighting--left-bottom lighting--right-top"}/>
      <div className={"stars stars--right-bottom"}/>

      <div className="main-inner">
        <ButtonBack className={styles.back} />

        <Logo />

        <p className={cn("paragraph", styles.text)}>
          Пожалуйста, используйте пластиковую карту для калибровки экрана, от этого зависит точность измерений.
        </p>

        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={{width: "163px", height: "auto"}}
        />

        <Button href={"/calibration"} className={styles.button} variant={"secondary"}>Хорошо</Button>
      </div>
    </main>
  );
};

export default MeasurementScreen;