import React from "react";
import cn from "classnames";
import Logo from "~/components/Logo/Logo";
import Button from "~/components/Button/Button";
import posterSrc from "/public/images/poster-calibration.png?url"
import styles from "./calibration-guide.module.scss"

const MeasurementScreen = () => {

  return (
    <main className={"top-line top-line--common"}>
      <div className={"lighting lighting--left-bottom lighting--right-top"}/>
      <div className={"stars stars--right-bottom"}/>

      <div className="main-inner">
        <Logo/>

        <p className={cn("paragraph", styles.text)}>
          Пожалуйста, используйте пластиковую карту для калибровки экрана, от этого зависит точность измерений.
        </p>

        <video
          src={""}
          poster={posterSrc}
          autoPlay
          loop
          muted
          playsInline
          style={{width: "163px", height: "auto"}}
        />

        <Button href={"/calibration"} className={styles.button}>Подтвердить</Button>
      </div>
    </main>
  );
};

export default MeasurementScreen;