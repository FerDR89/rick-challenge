import { useQuery } from "@tanstack/react-query";
import {
  getCharacterById,
  getCharactersBy,
  getCharactersById,
  getEpisodesBy,
} from "@/services";
import { QueryOptions } from "@/store/filterParams.store.";
import getEpisodeNumber from "@/utils/getEpisodes";

const useCharacterQueryById = (id: number) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(id),
    retry: 1,
  });
};

const useCharactersQueryById = (id: number[]) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["charactersById", id],
    queryFn: () => getCharactersById(id),
    initialData: [],
    retry: 1,
    enabled: Boolean(id.length),
  });

  const characters = Array.isArray(data) ? data : [data];

  return {
    data: characters,
    isLoading,
    error,
  };
};

const useCharactersQuery = (page: number, query: QueryOptions) => {
  return useQuery({
    queryKey: ["allCharacters", page, query],
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
  } = useCharacterQueryById(id);

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

export {
  useCharacterDetail,
  useCharactersQuery,
  useCharacterQueryById,
  useCharactersQueryById,
};
