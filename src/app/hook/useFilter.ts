import { useMemo, useState, useLayoutEffect } from "react";
// import { objectToString } from "../utils/object";
import _ from "lodash";
import { useSearchParams } from "react-router-dom";
import { nextTick } from "process";

type initialFiltersItemName = string;
type initialFiltersItemValue = string | number | boolean | null;

type initialFiltersItem = Record<string, string> | undefined;

interface useFilterArguments {
  initialFilters?: initialFiltersItem;
  withQueryParams?: boolean;
  withInitQueryParams?: boolean;
}

export default ({
  initialFilters = {},
  withQueryParams = true,
  withInitQueryParams = true,
}: useFilterArguments = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<initialFiltersItem>(initialFilters);

  if (withInitQueryParams) {
    useLayoutEffect(() => {
      const params: initialFiltersItem = {};

      searchParams.forEach((value, key) => {
        params[key] = value;
      });

      setFilters((prev) => ({
        ...prev,
        ...params,
      }));
    }, []);
  }

  const updateCurrentFilterValue = (
    name: initialFiltersItemName,
    value: initialFiltersItemValue
  ) => {
    const obj: initialFiltersItem = {};
    obj[name] = typeof value === "string" ? value : JSON.stringify(value);

    const updatedFilterValue: initialFiltersItem = {
      ...filters,
      ...obj,
    };

    setFilters(updatedFilterValue);

    if (withQueryParams) setSearchParams(updatedFilterValue);
  };

  const resetFilterValues = (): void => {
    setFilters({});
  };


  const urlSerachParams = useMemo(
    (): string =>
      filters ? "?" + new URLSearchParams(filters).toString() : "",
    [filters]
  );

  return {
    filters,
    updateCurrentFilterValue,
    resetFilterValues,
    urlSerachParams,
  };
};
