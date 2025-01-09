import { Link, useParams } from "react-router";
import { useCharacterDetail } from "@/hooks";
import CharacterDetail from "@/components/character-detail";

const Character = () => {
  const params = useParams();
  const id = Number(params.id);

  const { data, error, isLoading } = useCharacterDetail(id);

  //TODO: Loader (?)
  if (isLoading) return <h2>Loading...</h2>;

  //TODO: Error component (?)
  if (error) return <h2>Oops, hubo un error</h2>;

  //TODO: Revisar Types
  return (
    <article>
      <Link to="/">HOME</Link>
      {data && <CharacterDetail {...data} />}
    </article>
  );
};
export default Character;
