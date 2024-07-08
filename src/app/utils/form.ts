import { setErrorMessageForm } from "./error";
import { FieldValues } from "react-hook-form";

export const submit = (func: Function, setError: Function | null = null) => {
  return async (values: FieldValues) => {
    try {
      const res = await func({ body: values });

      if (
        res?.error &&
        res?.error?.data?.errors &&
        typeof setError === "function"
      ) {
        setErrorMessageForm(res?.error?.data?.errors, setError);

        return;
      }
    } catch (err) {
      console.error(err);
    }
  };
};
