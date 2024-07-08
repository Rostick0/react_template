import React, { FC, useEffect, useState } from "react";
import styles from "./style.module.scss";
import useFilter from "../../app/hook/useFilter";
import Item from "../../components/Item";
import { useForm } from "react-hook-form";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const {
    filters,
    updateCurrentFilterValue,
    urlSerachParams,
    resetFilterValues,
  } = useFilter({
    initialFilters: {
      // "filterLIKE[name]": "123",
      // name: "123",
    },
  });

  const { register } = useForm();

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const req = await fetch(
        "https://jsonplaceholder.typicode.com/todos" + urlSerachParams
      );
      const res = await req.json();

      setTodos(res);
    })();
  }, [filters]);

  return (
    <div className={styles.Home}>
      <div className="">
        {/* <pre>{JSON.parse(urlSerachParams)}</pre> */}
        <br />
        {/* <pre>{JSON.stringify(filters)}</pre> */}
      </div>
      <form style={{ display: "flex", gridGap: "20px" }}>
        <input
          className="input"
          placeholder="title"
          onChange={(e) => updateCurrentFilterValue("title", e.target.value)}
        />
        <input
          className="input"
          placeholder="userId"
          onChange={(e) => updateCurrentFilterValue("userId", e.target.value)}
        />
        <input
          className="input"
          placeholder="sort"
          onChange={(e) => updateCurrentFilterValue("sort", e.target.value)}
        />
        <label>
          <input
            style={{ appearance: "checkbox" }}
            type="checkbox"
            onChange={(e) =>
              updateCurrentFilterValue("completed", e.target.checked)
            }
          />
          <span>completed</span>
        </label>
        <button onClick={resetFilterValues} type="reset">
          Сброс
        </button>
      </form>

      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
};

export default Home;
