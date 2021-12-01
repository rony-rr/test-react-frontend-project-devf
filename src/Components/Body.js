import { FlagsTableComponent } from "./FlagsComponent";
export const Body = (props) => {
  return (
    <aside className="Body-app">
      {props.content}
      <div className="App-separator"></div>
      <FlagsTableComponent searchKey={props.searchKey} />
    </aside>
  );
};
