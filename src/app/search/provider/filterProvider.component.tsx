"use client";
import { createContext, PropsWithChildren, useState } from "react";
import { FilterType } from "../types/filter.type";

type ContextValue = {
  filters: FilterType;
};

export const FiltersContext = createContext<ContextValue>({
  filters: {},
});

type Props = PropsWithChildren;

export default function FilterProviders({ children }: Props) {
  const [filters, setFilters] = useState<FilterType>({});
  const changeFilter = <TKey extends keyof FilterType>(
    key: TKey,
    value: FilterType[TKey]
  ): void => {
    setFilters((old) => ({ ...old, [key]: value }));
  };
  return (
    <FiltersContext.Provider value={{ filters }}>
      {children}
    </FiltersContext.Provider>
  );
}
