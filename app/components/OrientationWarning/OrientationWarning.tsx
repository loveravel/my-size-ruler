import React from "react";
import cn from "classnames";
import Logo from "~/components/Logo/Logo";
import rotateDevice from "/images/rotate-device.png?url"
import styles from "./OrientationWarning.module.scss"

const OrientationWarning: React.FC = () => {
    return (
      <main className={cn(styles.main, "top-line top-line--common")}>
        <div className={styles.container}>
          <div className={styles.animation}>
            <img src={rotateDevice} alt="Поверните устройство"/>
          </div>
          <div className={styles.info}>
            <Logo className={styles.logo} width={105}/>
            <p className={cn("paragraph", styles.text)}>
              Для корректной работы приложения,<br/>пожалуйста поверните свой телефон<br/>в вертикальное положение.
            </p>
          </div>
        </div>
      </main>
    );
};

export default OrientationWarning;