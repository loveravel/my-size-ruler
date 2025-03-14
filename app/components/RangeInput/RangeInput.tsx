import React, { useState } from "react";
import Minus from '~/assets/icons/minus.svg?react';
import Plus from '~/assets/icons/plus.svg?react';
import styles from "./RangeInput.module.scss";

interface RangeInputProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
}

const RangeInput: React.FC<RangeInputProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value = 50,
  onChange,
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (newValue: number) => {
    const clampedValue = Math.min(Math.max(newValue, min), max);
    setCurrentValue(clampedValue);
    onChange?.(clampedValue);
  };

  return (
    <div className={styles.rangeContainer}>
      <button onClick={() => handleChange(currentValue - step)} className={styles.control}>
        <Minus />
      </button>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        onChange={(e) => handleChange(Number(e.target.value))}
        className={styles.range}
      />
      <button onClick={() => handleChange(currentValue + step)} className={styles.control}>
        <Plus />
      </button>
    </div>
  );
};

export default RangeInput;