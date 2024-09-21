import { toast } from "sonner";
import { createPost } from "../services/Post";
import { useMutation } from "@tanstack/react-query";

export const useCreatePost = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (postData) => await createPost(postData),
    onSuccess: () => {
      toast.success("post created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
