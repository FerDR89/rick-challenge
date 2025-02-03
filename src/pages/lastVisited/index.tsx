import { useCharactersQueryById } from "@/hooks";
import useLastVisitedCharacters from "@/store/lastVisitedCharacters.store";
import Text from "@/components/text";
import Spinner from "@/components/spinner";
import CharacterCard from "@/components/characterCard";
import { Character } from "@/types";
import styles from "./lastVisited.module.css";

const LastVisited = () => {
  const lastVisitedCharactersIds = useLastVisitedCharacters(
    (state) => state.lastVisitedCharactersIds
  );

  const {
    data: lastVisitedcharacters,
    isLoading,
    error,
  } = useCharactersQueryById(lastVisitedCharactersIds);

  return (
    <section className={styles.lastVisited__container}>
      <div className={styles.lastVisited__title_container}>
        <Text tag="title" text={"Last Visited Characters"} />
      </div>

      {isLoading || error || !lastVisitedCharactersIds.length ? (
        <div className={styles.lastVisited__status_container}>
          {isLoading && <Spinner />}
          {error && (
            <Text
              tag="subtitle"
              text={
                "Oops, an error has occurred. Please try again in a few moments."
              }
            />
          )}
          {!lastVisitedCharactersIds.length && (
            <Text tag="subtitle" text={"There are not visited character yet"} />
          )}
        </div>
      ) : null}

      {lastVisitedcharacters && (
        <div className={styles.lastVisited__characters_container}>
          {lastVisitedcharacters?.map((character: Character) => (
            <CharacterCard key={character.id} {...character} />
          ))}
        </div>
      )}
    </section>
  );
};
export default LastVisited;
