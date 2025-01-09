import { useQuery } from "@tanstack/react-query";
import { getCharacterById, getEpisodesBy } from "@/services";
import getEpisodeNumber from "@/utils/getEpisodes";

const useCharacterDetail = (id: number) => {
  const {
    data: characterData,
    isLoading: isCharacterLoading,
    error: characterError,
  } = useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(id),
    retry: 1,
  });

  const allEpisodesIds = characterData
    ? getEpisodeNumber(characterData?.episode)
    : [];

  const {
    data: episodesData,
    isLoading: isEpisodesLoading,
    error: episodesError,
  } = useQuery({
    queryKey: ["episode", allEpisodesIds],
    queryFn: () => getEpisodesBy(allEpisodesIds),
    retry: 1,
    enabled: Boolean(allEpisodesIds && !characterError),
  });

  const isLoading = isCharacterLoading || isEpisodesLoading;
  const error = characterError || episodesError;
  const data = characterData
    ? {
        ...characterData,
        episodes: episodesData,
      }
    : null;

  return {
    data,
    isLoading,
    error,
  };
};

export { useCharacterDetail };
