import React, { FC, useEffect, useState } from "react";
import styles from "./style.module.scss";
import useFilter from "../../app/hook/useFilter";
import Item from "../../components/Item";
import { useForm } from "react-hook-form";
import InputForm from "../../components/Form/InputForm";
import { setErrorMessage } from "../../app/utils/error";

interface AddProps {}

const Add: FC<AddProps> = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values: {
    title?: string;
    userId?: string;
    sort?: string;
    completed?: boolean;
  }) => {
    console.log(values);
  };

  console.log(errors);
  return (
    <div className={styles.Add}>
      <form
        style={{ display: "grid", gridGap: "20px" }}
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
      >
        <InputForm
          register={register}
          name="title"
          options={{ minLength: 15 }}
            error={setErrorMessage({ formField: errors?.title })}
        />
        {/* <input className="input" placeholder="title" {...register("title")} /> */}
        <input className="input" placeholder="userId" {...register("userId")} />
        <input className="input" placeholder="sort" {...register("sort")} />
        <label>
          <input
            style={{ appearance: "checkbox" }}
            type="checkbox"
            {...register("completed")}
          />
          <span>completed</span>
        </label>
        <div style={{ display: "flex", gridGap: "10px" }}>
          <button>Сохранить</button>
          <button onClick={reset} type="reset">
            Сброс
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
