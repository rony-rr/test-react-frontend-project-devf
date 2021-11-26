/** Import components */
import { HeaderComponent } from "../Components/Header";
import { Body } from "../Components/Body";
import { Footer } from "../Components/Footer";

/** Import src's */
import logo from "../logo.svg";

/** Import CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

function App() {
  // Retorna un número aleatorio entre min (incluido) y max (excluido)
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  const GET_OUT = `Número aleatorio = "${getRandomArbitrary(0, 100)}"`;

  return (
    <div className="App">
      <HeaderComponent title="Rony S." />
      <Body content={GET_OUT} />
      <Footer />
    </div>
  );
}

export default App;
