import { FieldValues, SubmitHandler } from "react-hook-form";
import FXForm from "../form/FXForm";
import FXModal from "./FXModal";
import FXInput from "../form/FXInput";
import FXTextarea from "../form/FXTextarea";
import { Button } from "@nextui-org/button";
import { useClaimRequest } from "@/src/hooks/claimRequest.hook";

interface IClaimProps {
  id: string;
  questions: string[];
}

const ClaimRequestModal = ({ id, questions }: IClaimProps) => {
  const { mutate: handleClaimRequest, isPending } = useClaimRequest();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const claimData = {
      item: id,
      description: data.description,
      answers: Object.keys(data)
        .filter((element) => element.startsWith("answer"))
        .map((answer) => data[answer]),
    };

    handleClaimRequest(claimData);
  };

  return (
    <div>
      <FXModal
        buttonClassName="w-full flex-1"
        buttonText="Claim Request"
        title="Claim Request"
      >
        <FXForm onSubmit={onSubmit}>
          {questions.map((question, index) => (
            <div key={index} className="mb-4">
              <p className="mb-1">{question}</p>
              <FXInput
                label={`Answer-${index + 1}`}
                name={`answer-${index + 1}`}
              />
            </div>
          ))}
          <FXTextarea label="Description" name="description" />
          <div>
            <Button className="w-full flex-1 my-2" size="lg" type="submit">
              {isPending ? "Sending" : "Send"}
            </Button>
          </div>
        </FXForm>
      </FXModal>
    </div>
  );
};

export default ClaimRequestModal;
