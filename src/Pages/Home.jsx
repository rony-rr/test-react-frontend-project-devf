import React, { useState, useEffect } from "react";

import { SearchProvider } from "../Context/SearchContext";

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
  // Retorna un número aleatorio entre min (incluido) y max (excluido)
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  // const GET_OUT = `Número aleatorio = "${getRandomArbitrary(0, 100)}"`;

  return (
    <SearchProvider>
      <div className="App">
        <Navbar />
        <HeaderComponent title="ReactJS" />
        <Body content={<SearchBar />} />
        <Footer />
        <div className="floating--close">
          <span
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Cerrar Sesión
          </span>
        </div>
      </div>
    </SearchProvider>
  );
}
