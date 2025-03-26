import { useState, useEffect } from "react";
import cn from "classnames";
import Logo from "~/components/Logo/Logo";
import Button from "~/components/Button/Button";
import cardImage from '/images/card.png?url';
import styles from "./calibration.module.scss";
import RangeInput from "~/components/RangeInput/RangeInput";
import ButtonBack from "~/components/ButtonBack/ButtonBack";

export default function CalibrationScreen() {
  const cardWidthMM = 85.6; // Стандартная ширина банковской карты в мм
  const cardHeightMM = 53.98; // Стандартная высота банковской карты
  const [height, setHeight] = useState(206);
  const [pxPerMM, setPxPerMM] = useState(0);

  useEffect(() => {
    const pxPerMM = height / cardHeightMM;
    setPxPerMM(pxPerMM);

    if (typeof window !== "undefined") {
      localStorage.setItem("pxPerMM", pxPerMM.toString());
    }
  }, [height]);

  return (
    <main className={cn("top-line top-line--common", styles.main)}>
      <div className={"lighting lighting--right-top"} />
      <div className={"stars stars--left-bottom"} />

      <div className="main-inner">
        <ButtonBack className={styles.back} />

        <Logo width={70} />

        <p className={cn(styles.text, "paragraph")}>
          Пожалуйста, используйте пластиковую карту для калибровки экрана, от этого зависит точность измерений.
        </p>

        <RangeInput
          min={100}
          max={370}
          step={1}
          value={height}
          onChange={(value) => setHeight(value)}
        />

        <Button className={styles.button} href={"/measurement-guide"} variant={"secondary"}>Подтвердить</Button>

        <div
          className={styles.card}
          style={{
            height: `${height}px`,
            width: `${pxPerMM * cardWidthMM}px`,
            transition: "0.2s ease",
          }}
        >
          <img src={cardImage} alt={"Банковская карта"} />
        </div>
      </div>
    </main>
  );
}