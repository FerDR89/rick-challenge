import { useParams } from "react-router";
import { useCharacterDetail } from "@/hooks";
import CharacterDetail from "@/components/characterDetail";
import Spinner from "@/components/spinner";
import styles from "./character.module.css";
import Text from "@/components/text";
import useLastVisitedCharacters from "../../store/lastVisitedCharacters.store";
import { useEffect } from "react";

const Character = () => {
  const params = useParams();
  const id = Number(params.id);

  const { data, error, isLoading } = useCharacterDetail(id);

  const addLastVisitedCharacterId = useLastVisitedCharacters(
    (state) => state.addLastVisitedCharacterId
  );

  useEffect(() => {
    addLastVisitedCharacterId(id);
  }, [id, addLastVisitedCharacterId]);

  return (
    <section className={styles.character__container}>
      {isLoading && <Spinner />}
      {error && (
        <Text
          tag="subtitle"
          text={
            "Oops, an error has occurred. Please try again in a few moments."
          }
        />
      )}
      {data && <CharacterDetail {...data} />}
    </section>
  );
};
export default Character;
