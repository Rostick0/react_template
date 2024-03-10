import React, { FC, useEffect, useState } from "react";
import styles from "./style.module.scss";
import useFilter from "../../app/hook/useFilter";
import Item from "../../components/Item";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { filters, updateCurrentFilterValue, urlSerachParams } = useFilter({
    initialFilters: {
      // "filterLIKE[name]": "123",
      // name: "123",
    },
  });

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
    <div className={styles.home}>
      <div className="">
        {/* <pre>{JSON.parse(urlSerachParams)}</pre> */}
        <br />
        {/* <pre>{JSON.stringify(filters)}</pre> */}
      </div>
      <input
        onChange={(e) => updateCurrentFilterValue("title", e.target.value)}
      />
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
};

export default Home;
