import { Character, Episode, Info } from "@/types";

const BASE_URL = "https://rickandmortyapi.com/api";

/*
This method allows ->
  get all characters
  get all characters on a specific page
  get all characters by status
  get all characters by species
  https://rickandmortyapi.com/documentation/#character
*/

const getCharactersBy = async (
  page: number,
  query?: string
): Promise<Info & { results: Character[] }> => {
  try {
    const response = await fetch(`${BASE_URL}/character/?page=${page}${query}`);
    const result = await response.json();

    if (!response.ok) {
      throw { message: result.error, status: response.status };
    }

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/*
This method allows ->
  get one character by his/her id
  https://rickandmortyapi.com/documentation/#character
*/

const getCharacterById = async (id: number): Promise<Character> => {
  try {
    const response = await fetch(`${BASE_URL}/character/${id}`);
    const result = await response.json();

    if (!response.ok) {
      throw { message: result.error, status: response.status };
    }

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/*
This method allows ->
  get one episode by its id
  get episodes by their ids
  https://rickandmortyapi.com/documentation/#episode
*/

const getEpisodesBy = async (
  episodes: number | number[]
): Promise<Episode | Episode[]> => {
  try {
    const response = await fetch(`${BASE_URL}/episode/${episodes}`);
    const result = await response.json();

    if (!response.ok) {
      throw { message: result.error, status: response.status };
    }

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getCharactersBy, getCharacterById, getEpisodesBy };
