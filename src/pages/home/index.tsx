// import { useNavigate } from "react-router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCharactersBy } from "@/services";
import CharacterCard from "@/components/character-card";
import Pagination from "@/components/pagination";
import { Character } from "@/types";

const param = "";

const Home = () => {
  // const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["characters", page, param],
    queryFn: () => getCharactersBy(page, param),
    retry: 1,
  });

  //TODO: Loader (?)
  if (isLoading) return <h2>Loading...</h2>;

  //TODO: Error component (?)
  if (error) return <h2>Oops, hubo un error</h2>;

  return (
    <div>
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
