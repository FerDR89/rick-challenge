import { create } from "zustand";
// import { persist } from "zustand/middleware";
import { Species, Status } from "@/types";

export interface QueryOptions {
  name?: string | "";
  status?: Status | "";
  species?: Species | "";
}

interface FilterParamState {
  query: QueryOptions;
  setQuery: (newParam: QueryOptions) => void;
  resetQueries: () => void;
}

const initialState: Pick<FilterParamState, "query"> = {
  query: { name: "", species: "", status: "" },
};

const useFilterQuery = create<FilterParamState>((set) => ({
  ...initialState,
  setQuery: (newQuery) => {
    set((state) => ({
      query: {
        ...state.query,
        ...newQuery,
      },
    }));
  },
  resetQueries: () => set(initialState),
}));

export default useFilterQuery;
