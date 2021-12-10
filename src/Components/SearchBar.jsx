import React, { useContext } from "react";

import { SearchContext } from "../Context/SearchContext";

import { Input } from "reactstrap";
import "../Sass/_searchbar.scss";

const SearchBar = (props) => {
  const { setSearchKey } = useContext(SearchContext);

  const ChangeValue = (val) => {
    setSearchKey(val);
  };

  return (
    <Input
      className="search__bar"
      placeholder="Buscar un país"
      onChange={(e) => ChangeValue(e.target.value)}
    />
  );
};

export default SearchBar;
