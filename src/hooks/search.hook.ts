import { useMutation } from "@tanstack/react-query";
import { getSearchResult } from "../services/Search";

export const useSearchTerm = () => {
  return useMutation({
    mutationKey: ["SEARCH_ITEMS"],
    mutationFn: async (searchTerm: string) => await getSearchResult(searchTerm),
  });
};
