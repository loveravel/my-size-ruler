import Button from "~/components/Button/Button";

import EliteCondoms from "~/assets/images/elite-condoms.svg?react";
import CondomSizes from "~/assets/images/condom-sizes.svg?react";
import packsImage from "/images/packs.png";

import styles from "./welcome.module.scss";
import cn from "classnames";

export function Welcome() {
  return (
    <main>
      <div className={"lighting lighting--right-bottom lighting--left-top"} />

      <div className="main-inner">
        <EliteCondoms className={styles.elite} />

        <div className={styles.packs}>
          <img src={packsImage} alt="My.Size" />
        </div>

        <CondomSizes className={styles.sizes}/>

        <p className={cn(styles.text, "subheading")}>Это быстрый и анонимный способ узнать размер подходящего Вам презерватива My.Size</p>

        <Button className={styles.button} href={"/calibration-guide"} variant={"secondary"}>Далее</Button>
      </div>
    </main>
  );
}