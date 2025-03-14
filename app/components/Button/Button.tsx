import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './button.module.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'light';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  isRounded?: boolean;
  className?: string;
  href?: string;
  external?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  isRounded,
  className,
  href,
  external = false,
  style,
  ...props
}) => {
  const classNames = cn(styles.button, styles[variant], { [styles.rounded]: isRounded }, className);

  if (href) {
    return external ? (
      <a href={href} className={classNames} style={style} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link to={href} className={classNames} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNames} onClick={onClick} style={style} {...props}>
      {children}
    </button>
  );
};

export default Button;
