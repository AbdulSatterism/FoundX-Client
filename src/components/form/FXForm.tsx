"use client";

import React, { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

interface IProps extends TFormConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

const FXForm = ({ children, onSubmit, defaultValues, resolver }: IProps) => {
  const formConfig: TFormConfig = {};

  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submitHandler = methods.handleSubmit;

  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FXForm;
