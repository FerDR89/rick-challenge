import { Character, Episode } from "@/types";
import Text from "../text";
import styles from "./characterDetail.module.css";

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
    <article className={styles.characterDetail__container}>
      <header className={styles.characterDetail__header_container}>
        <Text tag="title" text={name} />
      </header>
      <section className={styles.characterDetail__main_container}>
        <img
          src={image}
          alt={"Image of: " + name}
          loading="lazy"
          className={styles.characterDetail__main_image}
        />
        <ul className={styles.characterDetail__main_list_container}>
          <li className={styles.characterDetail__main_list_element}>
            <Text tag="text-bold" text="Status" />
            <Text tag="text-body" text={status} />
          </li>
          <li className={styles.characterDetail__main_list_element}>
            <Text tag="text-bold" text="Specie" />
            <Text tag="text-body" text={species} />
          </li>
          {type && (
            <li className={styles.characterDetail__main_list_element}>
              <Text tag="text-bold" text="Type" />
              <Text tag="text-body" text={type} />
            </li>
          )}
          <li className={styles.characterDetail__main_list_element}>
            <Text tag="text-bold" text="Gender" />
            <Text tag="text-body" text={gender} />
          </li>
          <li className={styles.characterDetail__main_list_element}>
            <Text tag="text-bold" text="Origin" />
            <Text tag="text-body" text={origin?.name} />
          </li>
          <li className={styles.characterDetail__main_list_element}>
            <Text tag="text-bold" text="Location" />
            <Text tag="text-body" text={location?.name} />
          </li>
        </ul>
      </section>
      <footer className={styles.characterDetail__footer_container}>
        <Text tag="subtitle" text="List of episodes" />
        <ul className={styles.characterDetail__footer_list_container}>
          {episodes.map(({ id, name, episode, air_date }) => (
            <li
              key={id}
              style={{ display: "flex" }}
              className={styles.characterDetail__footer_list_element_container}
            >
              <div className={styles.characterDetail__footer_list_element}>
                <Text tag="text-bold" text="Name:" />
                <Text tag="text-body" text={name} />
              </div>

              <div className={styles.characterDetail__footer_list_element}>
                <Text tag="text-bold" text="Number:" />
                <Text tag="text-body" text={episode} />
              </div>
              <div className={styles.characterDetail__footer_list_element}>
                <Text tag="text-bold" text="Air Date:" />
                <Text tag="text-body" text={air_date} />
              </div>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
};
export default CharacterDetail;
