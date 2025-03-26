import cn from "classnames";
import {useNavigate} from "react-router";
import ArrowBack from "~/assets/icons/arrow-back.svg?react";
import styles from "./ButtonBack.module.scss";

export interface ButtonBackProps {
  className?: string;
  onClick?: () => void;
}

const ButtonBack = ({ className, onClick }: ButtonBackProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick?.();
    navigate(-1);
  };

  return (
    <button className={cn(className, styles.button)} onClick={handleClick}>
      <ArrowBack />
    </button>
  )
};

export default ButtonBack;
