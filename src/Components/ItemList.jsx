import React from "react";

const ItemList = ({ key, country }) => {
  return (
    <p className="item-list" data-id={"id_" + key} key={"pais_" + key}>
      País: "{country}".
    </p>
  );
};

export default ItemList;
