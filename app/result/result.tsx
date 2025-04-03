import React, { useState, useEffect } from "react";
import cn from "classnames";
import Logo from "~/components/Logo/Logo";
import Button from "~/components/Button/Button";
import ButtonBack from "~/components/ButtonBack/ButtonBack";
import { marketplaceLinks } from "~/constants";
import styles from './result.module.scss';

const ResultScreen = () => {
  const [size, setSize] = useState(53);
  const [color, setColor] = useState('');

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedSize = parseFloat(localStorage.getItem("size") || "53");
      const storedColor = localStorage.getItem("color") || "";

      setSize(storedSize);
      setColor(storedColor);
    }
  }, []);

  return (
    <main className={cn(`top-line top-line--${size}`, styles.main)}>
      <div className={"lighting lighting--left-bottom lighting--right-top"}/>
      <div className={"stars stars--right-bottom"}/>

      <div className="main-inner">
        <ButtonBack className={styles.back} />

        <Logo className={styles.logo} />

        <p className={styles.title}>Размер</p>
        <p className={styles.size} style={{ background: color }}>{size}</p>

        {!marketplaceLinks[size?.toString()]?.length ?
          <p className={styles.noSize}>Сейчас презервативов такого размера нет в продаже.<br />Мы работаем над этим.</p>
          :
          <>
            <p className={styles.description}>Ваш идеальный размер здесь </p>

            <div className={styles.links}>
              {marketplaceLinks[size?.toString()].map((item) => (
                <Button key={item.name} className={styles.link} href={item.link} variant={"light"} isRounded external>
                  <img src={"/images/" + item.icon} alt={"Logo " + item.name} /><span>{item.name}</span>
                </Button>
              ))}
            </div>
          </>
        }
      </div>
    </main>
  );
};

export default ResultScreen;