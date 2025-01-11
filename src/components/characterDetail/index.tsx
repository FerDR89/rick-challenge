import { Character, Episode } from "@/types";

type CharacterDetailProps = Omit<
  Character,
  "id" | "episode" | "url" | "created"
> & { episodes: Episode[] };

const CharacterDetail = ({
  name,
  image,
  status,
  species,
  type,
  gender,
  origin,
  location,
  episodes = [],
}: CharacterDetailProps) => {
  return (
    <article>
      <h2>{name}</h2>
      <img
        src={image}
        alt={"Image of: " + name}
        loading="lazy"
        width="300px"
        height="300px"
      />
      <p>
        <span>Status: </span>
        {status}
      </p>
      <p>
        <span>Specie: </span>
        {species}
      </p>

      {type && (
        <p>
          <span>Type: </span>
          {type}
        </p>
      )}
      <p>
        <span>Gender: </span>
        {gender}
      </p>
      <p>
        <span>Origin: </span>
        {origin?.name}
      </p>
      <p>
        <span>Location: </span>
        {location?.name}
      </p>

      <h4>Episodes</h4>
      <ul>
        {episodes.map(({ id, name, episode }) => (
          <li key={id} style={{ display: "flex" }}>
            <p>
              <span>name: </span>
              {name}
            </p>
            <p>
              <span>number: </span>
              {episode}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};
export default CharacterDetail;
