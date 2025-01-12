import useFavoriteCharacters from "@/store/favoriteCharacters.store";
import { useCharactersQueryById } from "@/hooks";
import Button from "@/components/button";
import Text from "@/components/text";
import CharacterCard from "@/components/characterCard";
import Spinner from "@/components/spinner";
import styles from "./favorites.module.css";

const Favorites = () => {
  const removetAllCharacters = useFavoriteCharacters(
    (state) => state.removetAllCharactersId
  );

  const charactersIds = useFavoriteCharacters((state) => state.charactersIds);

  const {
    data: characters,
    isLoading,
    error,
  } = useCharactersQueryById(charactersIds);

  return (
    <section className={styles.favorites__container}>
      <div className={styles.favorites__title_container}>
        <Text tag="title" text={"My favorites Characters ❤️"} />
      </div>

      {isLoading || error || !charactersIds.length ? (
        <div className={styles.favorites__status_container}>
          {isLoading && <Spinner />}
          {error && (
            <Text
              tag="subtitle"
              text={
                "Oops, an error has occurred. Please try again in a few moments."
              }
            />
          )}
          {!charactersIds.length && (
            <Text
              tag="subtitle"
              text={"There are not favorites character yet"}
            />
          )}
        </div>
      ) : null}

      {characters.length > 0 && (
        <div className={styles.favorites__characters_container}>
          {characters.map((character) => (
            <CharacterCard key={character.id} {...character} />
          ))}
        </div>
      )}

      {characters.length > 0 && (
        <div className={styles.favorites__remove_btn_container}>
          <Button
            onClick={() => removetAllCharacters()}
            style={{ width: "332px", backgroundColor: "#A31D1D" }}
          >
            <Text tag="text-bold" text="Remove all favorites characters" />
          </Button>
        </div>
      )}
    </section>
  );
};
export default Favorites;
