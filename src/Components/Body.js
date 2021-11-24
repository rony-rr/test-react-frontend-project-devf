import { FlagsTableComponent } from "./FlagsComponent";
export const Body = (props) => {
  return (
    <aside className="Body-app">
      <p>{props.content}</p>
      <div className="App-separator"></div>
      <FlagsTableComponent />
    </aside>
  );
};
