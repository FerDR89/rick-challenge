import { useState } from "react";
import useFilterParam from "@/store/filterParams.store.";
import { useCharactersQuery } from "@/hooks";
import CharacterCard from "@/components/characterCard";
import Pagination from "@/components/pagination";
import SearchBar from "@/components/searchBar";
import SelectFilter from "@/components/selectFilter";
import Button from "@/components/button";
import Text from "@/components/text";
import Spinner from "@/components/spinner";
import { Character, Species, Status } from "@/types";
import { filterSpeciesOptions, filterStatusOptions } from "./constanst";
import styles from "./home.module.css";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const query = useFilterParam((state) => state.query);
  const setQuery = useFilterParam((state) => state.setQuery);
  const resetQueries = useFilterParam((state) => state.resetQueries);
  const { data, isLoading, error } = useCharactersQuery(page, query);

  const onStatusFilter = (value: Status) => {
    setQuery({ status: value });
    setPage(1);
  };

  const onSpeciesFilter = (value: Species) => {
    setQuery({ species: value });
    setPage(1);
  };

  const onSearch = (value: string) => {
    setQuery({ name: value });
    setPage(1);
  };

  return (
    <section className={styles.home__container}>
      <div className={styles.home__title_container}>
        <Text tag="title" text="Rick and Morty App" />
      </div>

      <div className={styles.home__filters_container}>
        <SearchBar onSearch={onSearch} />

        <SelectFilter
          onSelectChange={onSpeciesFilter}
          options={filterSpeciesOptions}
          value={query.species}
        />

        <SelectFilter
          onSelectChange={onStatusFilter}
          options={filterStatusOptions}
          value={query.status}
        />

        <div className={styles.home__filters_btn_container}>
          <Button onClick={() => resetQueries()}>
            <Text tag="text-bold" text="Reset filters" />
          </Button>
        </div>
      </div>

      {isLoading || error ? (
        <div className={styles.home__status_container}>
          {isLoading && <Spinner />}
          {error && (
            <Text
              tag="subtitle"
              text={
                "Oops, an error has occurred. Please try again in a few moments."
              }
            />
          )}
        </div>
      ) : null}

      {data && (
        <div className={styles.home__characters_container}>
          {data?.results.map((character: Character) => (
            <CharacterCard key={character.id} {...character} />
          ))}
        </div>
      )}

      {data?.info && (
        <div className={styles.home__pagination_container}>
          <Pagination
            totalPages={data?.info.pages}
            currentPage={page}
            setPage={setPage}
          />
        </div>
      )}
    </section>
  );
};

export default Home;
