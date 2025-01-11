import Button from "@/components/button";
import CharacterCard from "@/components/characterCard";
import { useCharactersQueryById } from "@/hooks";
import useFavoriteCharacters from "@/store/favoriteCharacters.store";
import { useNavigate } from "react-router";

const Favorites = () => {
  const navigate = useNavigate();

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
    <div>
      <Button style={{ width: "150px" }} onClick={() => navigate("/")}>
        Home
      </Button>

      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Oops, hubo un error</h2>}

      {charactersIds.length === 0 && (
        <h2>There are no favorite characters yet</h2>
      )}

      {characters.length > 0 &&
        characters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}

      <Button style={{ width: "150px" }} onClick={() => removetAllCharacters()}>
        Reset Favorites
      </Button>
    </div>
  );
};
export default Favorites;
