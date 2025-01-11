import { CSSProperties, ReactElement } from "react";
import styles from "./button.module.css";

type ButtonProps = {
  children: string | number | ReactElement;
  style?: CSSProperties;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button = ({ children, type, style, onClick }: ButtonProps) => {
  return (
    <div className={styles.button_container} style={{ ...style }}>
      <button type={type} className={styles.button} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
