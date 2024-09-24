"use server";

import axiosInstance from "@/src/lib/axiosInstance";

export const getSearchResult = async (searchTerm: string) => {
  try {
    const { data } = await axiosInstance.get(
      `search-items?searchTerm=${searchTerm}`
    );

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
