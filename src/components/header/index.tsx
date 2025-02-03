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
          <div className={styles.header__button_container}>
            <Link to="/favorites">
              <Button>
                <Text tag="text-bold" text="Favorites" />
              </Button>
            </Link>

            <Link to="/lastVisited">
              <Button>
                <Text tag="text-bold" text="Last visited" />
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;
