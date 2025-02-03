import Text from "../text";
import Button from "../button";
import styles from "./searchBar.module.css";

interface SearchBarProps {
  onSearch: (value: string) => void;
}
const SearchBar = ({ onSearch }: SearchBarProps) => {
  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem("search") as HTMLInputElement;

    if (input.value) {
      onSearch(input.value);
      input.value = "";
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.searchbar__container}>
      <input
        type="text"
        placeholder="search"
        name="search"
        className={styles.searchbar__input}
      />
      <Button type="submit">
        <Text tag="text-bold" text="Search" />
      </Button>
    </form>
  );
};
export default SearchBar;
