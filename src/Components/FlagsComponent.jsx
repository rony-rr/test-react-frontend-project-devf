import React, { useState, useEffect, useContext } from "react";

import { SearchContext } from "../Context/SearchContext";

import axios from "axios";
import { Alert, Button } from "reactstrap";

/** Import Components */
import ItemList from "./ItemList";

import "../Sass/_FlagComponent.scss";

export const FlagsTableComponent = (props) => {
  const { searchKey } = useContext(SearchContext);

  const [data, setData] = useState(null);
  const [isAlert, setIsAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (data) setIsAlert(true);
    }, 1500);
  }, [data]);

  const getData = async () => {
    setLoading(true);
    await axios
      .get(`https://flagcdn.com/es/codes.json`)
      .then((res) => {
        let data = res.data;
        // console.log({res});
        setData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const keys = data ? Object.keys(data) : null;
  let renderList = keys?.map((key, i) => {
    let res = data[key].includes(searchKey);
    if (!res) return null;
    return <ItemList country={data[key]} key={`Key_${i}`} />;
  }) || <></>;

  if (loading) return <p>Cargando datos...</p>;

  return (
    <div className="o-flag__component">
      {data && (
        <>
          {isAlert && (
            <div>
              <Alert color="primary">
                Hey! Data updated.{" "}
                <Button
                  className="btn-custom"
                  color="secondary"
                  onClick={() => setIsAlert(false)}
                >
                  Close
                </Button>
              </Alert>
            </div>
          )}
          {renderList}
        </>
      )}
      {!data && (
        <Button className="btn-custom" color="success" onClick={getData}>
          GET DATA
        </Button>
      )}
    </div>
  );
};
