import React from "react";
import cn from "classnames";
import Logo from "~/components/Logo/Logo";
import QR from "~/assets/images/qr.svg?react"
import styles from "./DesktopWarning.module.scss"

const DesktopWarning: React.FC = () => {
    return (
      <main className={cn(styles.main, "top-line top-line--common")}>
        <div className={"lighting lighting--left-top lighting--right-bottom"}/>

        <div className={cn("main-inner", styles.mainInner)}>
          <Logo className={styles.logo} width={140}/>

          <div>
            <p className={styles.title}>Приложение для подбора идеального размера презерватива</p>
            <p className={cn("paragraph", styles.text)}>
              Данное приложение было разработано<br/>специально для смартфонов.
              <br/>
              <br/>
              Пожалуйста, откройте страницу<br/>с мобильного устройства.
            </p>
          </div>

          <div className={styles.qr}>
            <QR/>
          </div>
        </div>
      </main>
    );
};

export default DesktopWarning;