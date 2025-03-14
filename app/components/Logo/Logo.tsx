import cn from "classnames";
import LogoSvg from "~/assets/images/logo.svg?react"
import styles from './Logo.module.scss'

interface LogoProps {
  className?: string;
  width?: number;
}

function Logo({ width = 70, className }: LogoProps) {
  return <div className={cn(styles.container, className)} style={{ width: `${width}px` }}>
    <LogoSvg />
  </div>
}

export default Logo;