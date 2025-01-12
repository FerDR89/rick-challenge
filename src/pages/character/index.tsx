import { useParams } from "react-router";
import { useCharacterDetail } from "@/hooks";
import CharacterDetail from "@/components/characterDetail";
import Spinner from "@/components/spinner";
import styles from "./character.module.css";

const Character = () => {
  const params = useParams();
  const id = Number(params.id);

  const { data, error, isLoading } = useCharacterDetail(id);

  return (
    <article className={styles.character__container}>
      {isLoading && <Spinner />}
      {error && <h2>Oops, hubo un error</h2>}
      {data && <CharacterDetail {...data} />}
    </article>
  );
};
export default Character;
