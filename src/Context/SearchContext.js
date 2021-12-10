import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchKey, setSearchKey] = useState("");

  return (
    <SearchContext.Provider
      value={{
        searchKey,
        setSearchKey,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
