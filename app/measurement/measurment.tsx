import React, { useState, useEffect } from "react";
import cn from "classnames";
import Logo from "~/components/Logo/Logo";
import Button from "~/components/Button/Button";
import Minus from '~/assets/icons/minus.svg?react';
import Plus from '~/assets/icons/plus.svg?react';
import ArrowDiameter from '~/assets/icons/arrow-diameter.svg?react';
import Condom from '~/assets/images/condom.svg?react';
import styles from './measurment.module.scss'

const MeasurementScreen = () => {
  const [width, setWidth] = useState(184); // Базовый размер в пикселях
  const [scale, setScale] = useState(1); // Масштаб из калибровки
  const minWidth = 140;
  const maxWidth = 270;
  const scaleStep = 3.2;

  useEffect(() => {
    const storedScale = parseFloat(localStorage.getItem("scale") || "1");
    setScale(storedScale);
  }, []);

  // Рассчитываем реальный размер на экране
  const displayWidth = width * scale;

  const zoomIn = () => {
    setWidth((prev) => Math.min(prev + scaleStep, maxWidth));
  };

  const zoomOut = () => {
    setWidth((prev) => Math.max(prev - scaleStep, minWidth));
  };

  // Вычисляем диаметр и обхват
  const diameter = (width / 5.4).toFixed(2);
  const circumference = (Math.PI * parseFloat(diameter)).toFixed(2);

  // Определяем размер и цвет
  const getSizeAndColor = (circumference: number) => {
    if (circumference <= 94) return { size: "45", color: "#0C9B86" };
    if (circumference <= 98) return { size: "47", color: "#22932B" };
    if (circumference <= 106) return { size: "49", color: "#9DB60A" };
    if (circumference <= 114) return { size: "53", color: "#F6B805" };
    if (circumference <= 120) return { size: "57", color: "#E66804" };
    if (circumference <= 128) return { size: "60", color: "#FC1D27" };
    if (circumference <= 138) return { size: "64", color: "#F5329B" };
    if (circumference <= 144) return { size: "69", color: "#B93ED6" };
    return { size: "72", color: "#0F7AEB" };
  };

  const { size, color } = getSizeAndColor(parseFloat(circumference));
  localStorage.setItem("size", size.toString());
  localStorage.setItem("color", color);

  return (
    <main className={`top-line top-line--${size}`}>
      <div className={"lighting lighting--right-top"}/>
      <div className={"stars stars--left-bottom"}/>

      <div className="main-inner">
        <Logo />

        <p className={cn("paragraph", styles.text)}>
          Используйте кнопки, чтобы сопоставить
          ширину на экране с шириной вашего полового члена в состоянии эрекции.
        </p>


        <div className={styles.condomContainer}>
          <div className={styles.controls}>
            <button className={styles.control} onClick={zoomOut} disabled={width <= minWidth}>
              <Minus/>
            </button>
            <button className={styles.control} onClick={zoomIn} disabled={width >= maxWidth}>
              <Plus/>
            </button>
          </div>

          <div
            className={styles.condom}
            style={{
              width: `${displayWidth}px`,
            }}
          >
            <div className={styles.condomInner}>
              <div className={styles.size}>
                <p>Размер</p>
                <span style={{backgroundColor: color}}>{size}</span>
              </div>
              <div className={styles.diameter}>
                <div className={styles.diameterInner}>
                  <ArrowDiameter/>
                  <p>Диаметр: <span>{Math.floor(Number(diameter))} мм</span></p>
                  <ArrowDiameter />
                </div>
              </div>
              <div className={styles.circumference}>
                Обхват: <span>{Math.floor(Number(circumference))} мм</span>
              </div>
            </div>
            <Condom/>
          </div>
        </div>

        <Button href={"/result"} className={styles.button} style={{backgroundColor: color}}>Подтвердить</Button>
      </div>
    </main>
  );
};

export default MeasurementScreen;