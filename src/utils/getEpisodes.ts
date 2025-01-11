const getEpisodeNumber = (episodes: string[]) => {
  const pathToRemove = "https://rickandmortyapi.com/api/episode/";

  const mappedEpisodes = episodes.map((e) =>
    Number(e.replace(pathToRemove, ""))
  );

  return mappedEpisodes.filter((e) => !Number.isNaN(e));
};

export default getEpisodeNumber;
