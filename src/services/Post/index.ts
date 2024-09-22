"use server";

import { envConfig } from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/axiosInstance";
import { revalidateTag } from "next/cache";

export const createPost = async (fomData: FormData) => {
  try {
    const { data } = await axiosInstance.post("/items", fomData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    revalidateTag("posts");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getPost = async (id: string) => {
  let fetchOptions = {};

  fetchOptions = {
    cache: "no-store",
  };

  const res = await fetch(`${envConfig.baseApi}/items/${id}`, fetchOptions);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
