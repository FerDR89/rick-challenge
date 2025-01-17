const getEpisodeNumber = (episodes: string[]) => {
  const pathToRemove = "https://rickandmortyapi.com/api/episode/";

  const mappedEpisodes = episodes.map((e) =>
    parseInt(e.replace(pathToRemove, ""), 10)
  );

  return mappedEpisodes.filter((e) => !Number.isNaN(e));
};

export default getEpisodeNumber;
