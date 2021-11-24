import React from "react";
import axios from "axios";
export const FlagsTableComponent = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios.get(`https://flagcdn.com/es/codes.json`).then((res) => {
      let data = res.data;
      // console.log({res});
      setData(data);
    });
  };

  const keys = data ? Object.keys(data) : null;
  let renderList = keys?.map((key, i) => {
    return (
      <p className="item-list" data-id={"id_" + i} key={"pais_"+i}>
        País: "{data[key]}".
      </p>
    );
  }) || <></>;

  if (!data) return <p>Cargando datos...</p>;

  return (
    <div
      style={{
        maxHeight: "30vh",
        width: "70%",
        padding: "20px 100px",
        overflowY: "scroll",
      }}
    >
      {renderList}
    </div>
  );
};
