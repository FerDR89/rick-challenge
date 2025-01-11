import { QueryOptions } from "@/store/filterParams.store.";
import { Character, Episode, Info } from "@/types";

const BASE_URL = "https://rickandmortyapi.com/api";

/*
This method allows ->
  get characters by name
  get all characters
  get all characters on a specific page
  get all characters by status
  get all characters by species
*/
const getCharactersBy = async (
  page: number,
  query: QueryOptions
): Promise<Info & { results: Character[] }> => {
  let queryParams = "";

  if (query.name) {
    queryParams = `&name=${query.name}`;
  }

  if (query.species) {
    queryParams += `&species=${query.species}`;
  }

  if (query.status) {
    queryParams += `&status=${query.status}`;
  }

  try {
    const response = await fetch(
      `${BASE_URL}/character/?page=${page}${queryParams}`
    );
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
  get a character by her/his id
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
  get characters by their id
*/
const getCharactersById = async (ids: number[]): Promise<Character[]> => {
  try {
    const response = await fetch(`${BASE_URL}/character/${ids}`);
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
*/
const getEpisodesBy = async (episodes: number[]): Promise<Episode[]> => {
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

export { getCharactersBy, getCharacterById, getEpisodesBy, getCharactersById };
