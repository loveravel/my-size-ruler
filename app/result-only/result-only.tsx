import React, { useState, useEffect } from "react";
import Logo from "~/components/Logo/Logo";
import styles from './result-only.module.scss'
import ButtonBack from "~/components/ButtonBack/ButtonBack";

const ResultOnlyScreen = () => {
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
    <main className={`top-line top-line--${size}`}>
      <div className={"lighting lighting--left-bottom lighting--right-top"}/>
      <div className={"stars stars--right-bottom"}/>

      <div className="main-inner">
        <ButtonBack className={styles.back} />

        <Logo className={styles.logo} />

        <p className={styles.size} style={{ background: color }}>{size}</p>
        <p className={styles.description}>Ваш идеальный размер</p>
      </div>
    </main>
  );
};

export default ResultOnlyScreen;