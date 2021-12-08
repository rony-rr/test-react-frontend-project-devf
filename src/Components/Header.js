import "../Sass/_header.scss";

export const HeaderComponent = ({ title = "Titulo de prueba", ...props }) => {
  return (
    <header className="App-header">
      <h1>{title}</h1>
    </header>
  );
};
