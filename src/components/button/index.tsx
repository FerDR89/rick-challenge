import { CSSProperties, ReactElement } from "react";
import styles from "./button.module.css";

type ButtonProps = {
  children: string | number | ReactElement;
  style?: CSSProperties;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button = ({ children, type, style, onClick, disabled }: ButtonProps) => {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
