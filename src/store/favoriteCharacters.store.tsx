import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteCharactersState {
  charactersIds: number[];
  addCharacterId: (newCharacterId: number) => void;
  removeCharacterId: (characterId: number) => void;
  removetAllCharactersId: () => void;
}

const initialState: Pick<FavoriteCharactersState, "charactersIds"> = {
  charactersIds: [],
};

const useFavoriteCharacters = create<FavoriteCharactersState>()(
  persist(
    (set) => ({
      ...initialState,
      addCharacterId: (newCharacterId) => {
        set((state) => ({
          charactersIds: [...state.charactersIds, newCharacterId],
        }));
      },

      removeCharacterId: (characterId) => {
        set((state) => ({
          charactersIds: state.charactersIds.filter((id) => id !== characterId),
        }));
      },

      removetAllCharactersId: () => set(initialState),
    }),
    { name: "favorite-characters" }
  )
);

export default useFavoriteCharacters;
