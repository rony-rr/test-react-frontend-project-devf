import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert, Button } from "reactstrap";

/** Import Components */
import ItemList from "./ItemList";

export const FlagsTableComponent = ({searchKey = "", ...props}) => {

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
    if( !res ) return null;
    return <ItemList key={i} country={data[key]} />;
  }) || <></>;

  if (loading) return <p>Cargando datos...</p>;
  if (!data)
    return (
      <Button color="success" onClick={getData}>
        GET DATA
      </Button>
    );

  return (
    <div
      style={{
        maxHeight: "30vh",
        width: "70%",
        padding: "20px 100px",
        overflowY: "scroll",
      }}
    >
      {isAlert && (
        <div>
          <Alert color="primary">
            Hey! Data updated.{" "}
            <Button color="secondary" onClick={() => setIsAlert(false)}>
              Close
            </Button>
          </Alert>
        </div>
      )}
      {renderList}
    </div>
  );
};
