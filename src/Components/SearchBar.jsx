import React from "react";
import { Input } from "reactstrap";
import "../Sass/_searchbar.scss";

const SearchBar = (props) => {
  const ChangeValue = (val) => {
    if (props.ChangeVal) {
      props.ChangeVal(val);
    }
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
