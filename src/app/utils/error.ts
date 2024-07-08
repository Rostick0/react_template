import {
  UseFormSetValue,
  FieldValues,
  UseFormSetError,
  FieldErrors,
  GlobalError,
} from "react-hook-form";

export const errorsMessage = {
  required: "Required field",
  minLenght: (value: string | number) => `Min lenght ${value}`,
  maxLenght: (value: string | number) => `Max lenght ${value}`,
  confirm: (field: string | number) =>
    `The ${field} confirmation does not match`,
};

export const setErrorMessageForm = (
  errors: FieldErrors,
  setError: Function
) => {
  Object.entries(errors)?.forEach(([name, message]) => {
    setError(name, {
      message,
    });
  });
};

interface setErrorMessageArguments {
  formField: {
    type?: "required";
    message?: string;
  };
}

export const setErrorMessage = ({
  formField,
}: setErrorMessageArguments): string | undefined => {
  if (!formField?.message && formField?.type)
    return errorsMessage?.[formField?.type];

  return formField?.message ? formField?.message : formField?.type;
};
