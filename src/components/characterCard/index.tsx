import { Character } from "@/types";
import { Link } from "react-router";
import FavoriteButton from "../favoriteButton";
import useFavoriteCharacters from "@/store/favoriteCharacters.store";

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
    <article>
      <div>
        <h2>{name}</h2>
        <FavoriteButton onChecked={addOrRemoveCharacter} checked={isFavorite} />
      </div>
      <Link to={`/character/${id}`}>
        <img
          src={image}
          alt={"Image of: " + name}
          loading="lazy"
          width="300px"
          height="300px"
        />
      </Link>
      <p>
        <span>Status: </span>
        {status}
      </p>
      <p>
        <span>Specie: </span>
        {species}
      </p>
    </article>
  );
};
export default CharacterCard;
