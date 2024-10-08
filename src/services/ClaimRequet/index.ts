"use server";

import axiosInstance from "@/src/lib/axiosInstance";
import { FieldValues } from "react-hook-form";

export const addClaimRequest = async (
  claimRequest: FieldValues
): Promise<any> => {
  try {
    const { data } = await axiosInstance.post("/claim-request", claimRequest);

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
