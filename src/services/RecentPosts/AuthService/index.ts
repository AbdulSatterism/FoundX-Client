"use server";

import axiosInstance from "@/src/lib/axiosInstance";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

const userRegister = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);

    if (data?.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
    
  } catch (error: any) {
    throw new Error(error);
  }
};

export default userRegister;
