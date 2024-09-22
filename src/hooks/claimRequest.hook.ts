import { useMutation } from "@tanstack/react-query";
import { addClaimRequest } from "../services/ClaimRequet";
import { toast } from "sonner";

interface IData {
  item: string;
  description: string;
  answers: string[];
}
export const useClaimRequest = () => {
  return useMutation<any, Error, IData>({
    mutationKey: ["CLAIM_REQUEST"],
    mutationFn: async (claimRequestData) =>
      await addClaimRequest(claimRequestData),
    onSuccess: () => {
      toast.success("Claim request created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
