import Button from "../button";

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
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="search" name="search" />
      <Button type="submit" style={{ width: "300px" }}>
        Search
      </Button>
    </form>
  );
};
export default SearchBar;
