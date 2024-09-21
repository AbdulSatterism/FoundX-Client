"use client";

import FXDatePicker from "@/src/components/form/FXDatePicker";
import FXInput from "@/src/components/form/FXInput";
import FXSelect from "@/src/components/form/FXSelect";
import dateToISO from "@/src/utils/dateToISO";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { allDistict } from "@bangladeshi/bangladesh-address";
import { useGetCategories } from "@/src/hooks/categories.hook";
import { useState } from "react";
import FXTextarea from "@/src/components/form/FXTextarea";
import { AddIcon, TrashIcon } from "@/src/assets/icons";
import { useUser } from "@/src/context/user.provider";
import { useCreatePost } from "@/src/hooks/post.hook";
import Loading from "@/src/components/UI/Loading";
import { useRouter } from "next/navigation";

export const cityOptions = allDistict()
  .sort()
  .map((city: string) => ({
    key: city,
    label: city,
  }));

const CreatePost = () => {
  const { user } = useUser();
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);
  const { mutate: handleCreatePost, isPending, isSuccess } = useCreatePost();
  const router = useRouter();
  const {
    data: categoriesData,
    isLoading,
    isSuccess: categorySuccess,
  } = useGetCategories();

  let categoryOptions: { key: string; label: string }[] = [];

  if (categoriesData?.data && !isLoading) {
    categoryOptions = categoriesData?.data
      .sort()
      .map((category: { _id: string; name: string }) => ({
        key: category?._id,
        label: category?.name,
      }));
  }

  const methods = useForm();
  const { handleSubmit, control } = methods;
  const { append, fields, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    const postData = {
      ...data,
      questions: data.questions.map((que: { value: string }) => que.value),
      dateFound: dateToISO(data.dateFound),
      user: user!._id,
    };

    formData.append("data", JSON.stringify(postData));

    for (let image of imageFiles) {
      formData.append("itemImages", image);
    }
    handleCreatePost(formData);
  };

  const handleFieldAppend = () => {
    append({
      name: "questions",
      value: "",
    });
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];

    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isPending && isSuccess) {
    router.push("/");
  }

  return (
    <>
      {isPending && <Loading />}
      <div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput label="Title" name="title" />
              </div>
              <div className="min-w-fit flex-1">
                <FXDatePicker label="Found date" name="dateFound" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput label="Location" name="location" />
              </div>
              <div className="min-w-fit flex-1">
                <FXSelect label="City" name="city" options={cityOptions} />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXSelect
                  disabled={!categorySuccess}
                  label="Category"
                  name="category"
                  options={categoryOptions}
                />
              </div>
              <div className="min-w-fit flex-1">
                <label
                  className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400 "
                  htmlFor="image"
                >
                  upload image
                </label>
                <input
                  multiple
                  className="hidden"
                  id="image"
                  type="file"
                  onChange={(e) => handleImageChange(e)}
                />
              </div>
            </div>

            <div>
              <div className="flex mx-auto gap-5 my-5 flex-wrap">
                {imagePreviews.length > 0 &&
                  imagePreviews.map((imageURL) => (
                    <div
                      key={imageURL}
                      className="relative size-48 rounded-xl border-2 border-dashed border-default-300"
                    >
                      <img
                        alt="item-image"
                        className=" w-full h-full rounded-md object-cover object-center"
                        src={imageURL}
                      />
                    </div>
                  ))}
              </div>
            </div>

            <div className="flex flex-wrap-reverse gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXTextarea label="Description" name="description" />
              </div>
            </div>

            <Divider className="my-5" />
            <div className="flex justify-between items-center">
              <h1 className="text-xl">Owner verification questions</h1>
              <Button isIconOnly onClick={() => handleFieldAppend()}>
                <AddIcon />
              </Button>
            </div>

            {fields.map((field, index) => (
              <div key={field.id} className="flex items-center">
                <FXInput label="Question" name={`questions.${index}.value`} />
                <Button
                  isIconOnly
                  className="h-14 w-16"
                  onClick={() => remove(index)}
                >
                  <TrashIcon />
                </Button>
              </div>
            ))}

            <Divider className="my-5" />

            <Button type="submit">post</Button>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default CreatePost;
