import React, { useState, useEffect } from "react";

/** Import components */
import Navbar from "../Components/Navbar";
import { HeaderComponent } from "../Components/Header";
import { Body } from "../Components/Body";
import SearchBar from "../Components/SearchBar";
import { Footer } from "../Components/Footer";

/** Import CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function Home(props) {
  const [searchVar, setSearchVar] = useState("");

  useEffect(() => {
    // console.log({ searchVar });
  }, [searchVar]);

  // Retorna un número aleatorio entre min (incluido) y max (excluido)
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Función para setear estado de search variable
  const SetSearchParam = (val) => {
    setSearchVar(val);
  };

  // const GET_OUT = `Número aleatorio = "${getRandomArbitrary(0, 100)}"`;

  return (
    <div className="App">
      <Navbar />
      <HeaderComponent title="ReactJS" />
      <Body
        searchKey={searchVar}
        content={<SearchBar ChangeVal={SetSearchParam} />}
      />
      <Footer />
    </div>
  );
}
