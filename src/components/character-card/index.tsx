import { Character } from "@/types";
import { Link } from "react-router";

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
  return (
    <article>
      <h2>{name}</h2>
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
        <span>Specie: </span>
        {species}
      </p>
      <p>
        <span>Status: </span>
        {status}
      </p>
    </article>
  );
};
export default CharacterCard;
