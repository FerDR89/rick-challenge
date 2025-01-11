import { Link, useLocation } from "react-router";
import Button from "../button";
import Text from "../text";
import styles from "./header.module.css";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className={styles.header__container}>
      <Text tag="subtitle" text="MeLi Challenge" />

      <nav>
        {pathname !== "/" ? (
          <Link to="/">
            <Button>
              <Text tag="text-bold" text="Home" />
            </Button>
          </Link>
        ) : (
          <Link to="/favorites">
            <Button>
              <Text tag="text-bold" text="Favorites" />
            </Button>
          </Link>
        )}
      </nav>
    </header>
  );
};
export default Header;
