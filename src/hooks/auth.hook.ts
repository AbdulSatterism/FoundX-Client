import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import userRegister from "../services/RecentPosts/AuthService";
import { toast } from "sonner";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["user_register"],
    mutationFn: async (userData) => await userRegister(userData),
    onSuccess: () => {
      toast.success("User Register successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
