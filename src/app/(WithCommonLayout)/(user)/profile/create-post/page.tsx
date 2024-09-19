"use client";

import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

const CreatePost = () => {
  const methods = useForm();
  const { handleSubmit, control } = methods;
  const { append, fields, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      questions: data.questions.map((que: { value: string }) => que.value),
    };

    console.log(postData);
  };

  const handleFieldAppend = () => {
    append({
      name: "questions",
      value: "",
    });
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FXInput label="Title" name="title" />

          <Divider className="my-5" />
          <div className="flex justify-between items-center">
            <h1 className="text-xl">Owner verification questions</h1>
            <Button onClick={() => handleFieldAppend()}>Append</Button>
          </div>

          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center">
              <FXInput label="Question" name={`questions.${index}.value`} />
              <Button onClick={() => remove(index)}>remove</Button>
            </div>
          ))}
          <Divider className="my-5" />

          <Button type="submit">post</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreatePost;
