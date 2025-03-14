import React, { useState, useEffect } from "react";
import cn from "classnames";
import Logo from "~/components/Logo/Logo";
import Button from "~/components/Button/Button";
import posterSrc from "/public/images/poster-measurement.png?url"
import styles from "./measurement-guide.module.scss"

const MeasurementScreen = () => {
  return (
    <main className={"top-line top-line--common"}>
      <div className={"lighting lighting--left-bottom lighting--right-top"}/>
      <div className={"stars stars--right-bottom"}/>

      <div className="main-inner">
        <Logo/>

        <p className={cn("paragraph", styles.text)}>
          Используйте стрелки, чтобы сопоставить ширину на экране с шириной вашего эрегированного полового члена.
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

        <Button href={"/measurement"} className={styles.button}>Подтвердить</Button>
      </div>
    </main>
  );
};

export default MeasurementScreen;