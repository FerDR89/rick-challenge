import { Link, useParams } from "react-router";
import { useCharacterDetail } from "@/hooks";
import CharacterDetail from "@/components/characterDetail";

const Character = () => {
  const params = useParams();
  const id = Number(params.id);

  const { data, error, isLoading } = useCharacterDetail(id);

  return (
    <article>
      <Link to="/">HOME</Link>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Oops, hubo un error</h2>}
      {data && <CharacterDetail {...data} />}
    </article>
  );
};
export default Character;
