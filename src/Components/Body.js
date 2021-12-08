import { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import { FlagsTableComponent } from "./FlagsComponent";

export const Body = ({ content, ...props }) => {
  const [renderItem, setRenderItem] = useState(
    <Spinner color="success" type="grow">
      Loading...
    </Spinner>
  );

  useEffect(() => {
    setRenderItem(
      <InsideComponent content={content} searchKey={props.searchKey} />
    );
  }, [props.searchKey]);

  useEffect(() => {
    setTimeout(() => {
      setRenderItem(
        <InsideComponent content={content} searchKey={props.searchKey} />
      );
    }, 1000);
  }, []);

  return <aside className="Body-app">{renderItem}</aside>;
};

const InsideComponent = ({ content, searchKey }) => {
  return (
    <>
      {content}
      <div className="App-separator"></div>
      <FlagsTableComponent searchKey={searchKey} />
    </>
  );
};
