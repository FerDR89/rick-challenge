import Text from "../text";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <div className={styles.footer__text_container}>
        <Text tag="text-body" text="Made with ❤️ by:" />
        <a
          href="https://portfolio-418e2.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Text tag="text-bold" text="Fernando de Row" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
