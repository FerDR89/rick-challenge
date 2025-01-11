import { Link } from "react-router";
import { Character } from "@/types";
import useFavoriteCharacters from "@/store/favoriteCharacters.store";
import Text from "../text";
import FavoriteButton from "../favoriteButton";
import styles from "./characterCard.module.css";

type CharacterCardProps = Pick<
  Character,
  "name" | "image" | "id" | "status" | "species"
>;

const CharacterCard = ({
  id,
  image,
  name,
  species,
  status,
}: CharacterCardProps) => {
  const addCharacterToFavorite = useFavoriteCharacters(
    (state) => state.addCharacterId
  );

  const removeCharacterFromFavorite = useFavoriteCharacters(
    (state) => state.removeCharacterId
  );

  const favoritesCharactersIds = useFavoriteCharacters(
    (state) => state.charactersIds
  );

  const isFavorite = favoritesCharactersIds.includes(id);

  const addOrRemoveCharacter = (checked: boolean) => {
    if (!checked) {
      removeCharacterFromFavorite(id);
      return;
    }
    addCharacterToFavorite(id);
  };

  return (
    <article className={styles.characterCard}>
      <header className={styles.characterCard__header_container}>
        <Text tag="subtitle" text={name} />
        <FavoriteButton onChecked={addOrRemoveCharacter} checked={isFavorite} />
      </header>
      <main className={styles.characterCard__main_container}>
        <Link to={`/character/${id}`}>
          <img
            src={image}
            alt={"Image of: " + name}
            loading="lazy"
            className={styles.characterCard__main_image}
          />
        </Link>
      </main>
      <footer className={styles.characterCard__footer_container}>
        <div className={styles.characterCard__footer_text_container}>
          <Text tag="text-bold" text="Status: " />
          <Text tag="text-body" text={status} />
        </div>
        <div className={styles.characterCard__footer_text_container}>
          <Text tag="text-bold" text="Species: " />
          <Text tag="text-body" text={species} />
        </div>
      </footer>
    </article>
  );
};
export default CharacterCard;
