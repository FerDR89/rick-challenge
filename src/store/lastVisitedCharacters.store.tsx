import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LastVisitedCharactersState {
  lastVisitedCharactersIds: number[];
  addLastVisitedCharacterId: (newCharacterId: number) => void;
}

const initialState: Pick<
  LastVisitedCharactersState,
  "lastVisitedCharactersIds"
> = {
  lastVisitedCharactersIds: [],
};

const useLastVisitedCharacters = create<LastVisitedCharactersState>()(
  persist(
    (set) => ({
      ...initialState,
      addLastVisitedCharacterId: (newCharacterId) => {
        set((state) => {
          if (state.lastVisitedCharactersIds.includes(newCharacterId))
            return state;

          if (state.lastVisitedCharactersIds.length === 5) {
            const charactersIdsWithoutFirstElement =
              state.lastVisitedCharactersIds.filter((_, idx) => idx !== 0);

            console.log({ charactersIdsWithoutFirstElement });

            return {
              lastVisitedCharactersIds:
                charactersIdsWithoutFirstElement.concat(newCharacterId),
            };
          } else {
            return {
              lastVisitedCharactersIds: [
                ...state.lastVisitedCharactersIds,
                newCharacterId,
              ],
            };
          }
        });
      },
    }),
    { name: "lastVisited-characters" }
  )
);

export default useLastVisitedCharacters;
