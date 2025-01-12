import Text from "@/components/text";
import styles from "./notFound.module.css";

const NotFound = () => {
  return (
    <article className={styles.notFound__container}>
      <Text
        tag="subtitle"
        text="I don't know Rick"
        style={{
          color: "#60a85f",
          textShadow: "1px 1px 3px #88e23b, 5px 5px 5px #000",
          fontSize: "clamp(32px, 5vw, 48px)",
        }}
      />
      <Text
        tag="subtitle"
        text="This seems like a"
        style={{
          color: "#60a85f",
          textShadow: "1px 1px 3px #88e23b, 5px 5px 5px #000",
          fontSize: "clamp(32px, 5vw, 48px)",
        }}
      />
      <Text
        tag="subtitle"
        text="Falsy value."
        style={{
          color: "#60a85f",
          textShadow: "1px 1px 3px #88e23b, 5px 5px 5px #000",
          fontSize: "clamp(32px, 5vw, 48px)",
        }}
      />
    </article>
  );
};
export default NotFound;
