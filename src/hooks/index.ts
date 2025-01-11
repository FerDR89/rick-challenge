import { useQuery } from "@tanstack/react-query";
import { getCharacterById, getCharactersBy, getEpisodesBy } from "@/services";
import { QueryOptions } from "@/store/filterParams.store.";
import getEpisodeNumber from "@/utils/getEpisodes";

const useCharacterQuery = (id: number) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(id),
    retry: 1,
  });
};

const useCharactersQuery = (page: number, query: QueryOptions) => {
  return useQuery({
    queryKey: ["characters", page, query],
    queryFn: () => getCharactersBy(page, query),
    retry: 1,
  });
};

const useEpisodeQuery = (ids: number[]) => {
  return useQuery({
    queryKey: ["episode", ids],
    queryFn: () => getEpisodesBy(ids),
    initialData: [],
    retry: 1,
    enabled: Boolean(ids.length),
  });
};

const useCharacterDetail = (id: number) => {
  const {
    data: characterData,
    isLoading: isCharacterLoading,
    error: characterError,
  } = useCharacterQuery(id);

  const allEpisodesIds = characterData
    ? getEpisodeNumber(characterData?.episode)
    : [];

  const {
    data: episodesData,
    isLoading: isEpisodesLoading,
    error: episodesError,
  } = useEpisodeQuery(allEpisodesIds);

  const isLoading = isCharacterLoading || isEpisodesLoading;
  const error = characterError || episodesError;
  const episodes = Array.isArray(episodesData) ? episodesData : [episodesData];

  const data = characterData
    ? {
        ...characterData,
        episodes: episodes,
      }
    : null;

  return {
    data,
    isLoading,
    error,
  };
};

export { useCharacterDetail, useCharactersQuery, useCharacterQuery };
