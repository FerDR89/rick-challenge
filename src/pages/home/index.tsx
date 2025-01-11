import { useState } from "react";
import { Link } from "react-router";
import CharacterCard from "@/components/characterCard";
import Pagination from "@/components/pagination";
import SearchBar from "@/components/searchBar";
import SelectFilter from "@/components/selectFilter";
import Button from "@/components/button";
import useFilterParam from "@/store/filterParams.store.";
import { useCharactersQuery } from "@/hooks";
import { Character, Species, Status } from "@/types";

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
    <div>
      <p>{JSON.stringify(query)}</p>

      <Link to="/favorites">
        <Button style={{ width: "150px" }}>FAVORITES</Button>
      </Link>

      <SearchBar onSearch={onSearch} />

      <SelectFilter
        onSelectChange={onSpeciesFilter}
        options={[
          "Human",
          "Alien",
          "Humanoid",
          "unknown",
          "Poopybutthole",
          "Mythological Creature",
          "Animal",
          "Robot",
          "Cronenberg",
          "Disease",
        ]}
        value={query.species}
      />

      <SelectFilter
        onSelectChange={onStatusFilter}
        options={["Alive", "Dead", "Unknown"]}
        value={query.status}
      />

      <Button style={{ width: "150px" }} onClick={() => resetQueries()}>
        Reset filters
      </Button>

      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Oops, hubo un error</h2>}

      {data &&
        data?.results.map((character: Character) => (
          <CharacterCard key={character.id} {...character} />
        ))}

      {data?.info && (
        <Pagination
          totalPages={data?.info.pages}
          currentPage={page}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default Home;
