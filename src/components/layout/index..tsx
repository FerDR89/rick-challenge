import { Outlet } from "react-router";
import Header from "../header";
import styles from "./layout.module.css";
import Footer from "../footer";

const Layout = () => {
  return (
    <section className={styles.layout__container}>
      <Header />
      <main className={styles.layout__main_container}>
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default Layout;
