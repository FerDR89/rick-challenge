import { CSSProperties } from "react";
import styles from "./text.module.css";

type TextProps = {
  tag: "title" | "subtitle" | "text-bold" | "text-body";
  text: string;
  style?: CSSProperties;
};

const Text = ({ tag, text, style = {} }: TextProps) => {
  const tags = {
    title: (
      <h1 className={styles.text_title} style={style}>
        {text}
      </h1>
    ),
    subtitle: (
      <h2 className={styles.text_subtitle} style={style}>
        {text}
      </h2>
    ),
    ["text-bold"]: (
      <p className={styles.text_bold} style={style}>
        {text}
      </p>
    ),
    ["text-body"]: (
      <p className={styles.text_body} style={style}>
        {text}
      </p>
    ),
  };
  return tags[tag];
};

export default Text;
