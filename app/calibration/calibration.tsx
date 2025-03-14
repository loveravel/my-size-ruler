import { useState, useEffect } from "react";
import cn from "classnames";
import Logo from "~/components/Logo/Logo";
import Button from "~/components/Button/Button";
import cardImage from '/images/card.png?url';
import styles from "./calibration.module.scss";
import RangeInput from "~/components/RangeInput/RangeInput";

export default function CalibrationScreen() {
  const [scale, setScale] = useState(() => {
    return parseFloat(localStorage.getItem("scale") || "1");
  });

  useEffect(() => {
    localStorage.setItem("scale", scale.toString());
  }, [scale]);

  return (
    <main className={"top-line top-line--common"}>
      <div className={"lighting lighting--right-top"} />
      <div className={"stars stars--left-bottom"} />

      <div className="main-inner">
        <Logo width={70} />

        <p className={cn(styles.text, "paragraph")}>
          Пожалуйста, используйте пластиковую карту для калибровки экрана, от этого зависит точность измерений.
        </p>

        <RangeInput
          min={0.75}
          max={1.5}
          step={0.01}
          value={scale}
          onChange={(value) => setScale(value)}
        />

        <Button className={styles.button} href={"/measurement-guide"} variant={"secondary"}>Подтвердить</Button>

        <div
          className={styles.card}
          style={{
            transform: `scale(${scale})`,
            transition: "0.2s ease",
          }}
        >
          <img src={cardImage} alt={"Банковская карта"} />
        </div>
      </div>
    </main>
  );
}