import React, { useState, useEffect } from "react";
import cn from "classnames";
import Logo from "~/components/Logo/Logo";
import Button from "~/components/Button/Button";
import WB from '~/assets/icons/wb.svg?react';
import Ozon from '~/assets/icons/ozon.svg?react';
import YMarket from '~/assets/icons/yandex-market.svg?react';
import styles from './result.module.scss'

const ResultScreen = () => {
  const [size, setSize] = useState(53);
  const [color, setColor] = useState('');

  useEffect(() => {
    const storedSize = parseFloat(localStorage.getItem("size") || "53");
    const storedColor = localStorage.getItem("color") || "";
    setSize(storedSize);
    setColor(storedColor);
  }, []);

  return (
    <main className={`top-line top-line--${size}`}>
      <div className={"lighting lighting--left-bottom lighting--right-top"}/>
      <div className={"stars stars--right-bottom"}/>

      <div className="main-inner">
        <Logo className={styles.logo} />

        <p className={styles.title}>Размер</p>
        <p className={styles.size} style={{ background: color }}>{size}</p>
        <p className={styles.description}>Ваш идеальный размер здесь </p>

        <div className={styles.links}>
          <Button className={styles.link} href={"link-wb"} variant={"light"} isRounded external><><WB /><span>WILDBERRIES</span></></Button>
          <Button className={styles.link} href={"link-ozon"} variant={"light"} isRounded external><><Ozon /><span>OZON</span></></Button>
          <Button className={styles.link} href={"link-ymarket"} variant={"light"} isRounded external><><YMarket /><span>Яндекс.Маркет</span></></Button>
        </div>
      </div>
    </main>
  );
};

export default ResultScreen;