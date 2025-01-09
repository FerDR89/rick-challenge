const getEpisodeNumber = (episodes: string[]) => {
  const pathToRemove = "https://rickandmortyapi.com/api/episode/";

  if (episodes.length === 1)
    return Number(episodes[0].replace(pathToRemove, ""));

  return episodes.map((e) => Number(e.replace(pathToRemove, "")));
};

export default getEpisodeNumber;
