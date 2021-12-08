import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/** Import src's */
import logo from "../logo.svg";

/** Import components */
import Home from "./Home";
import About from "./About";

const StackNavigator = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
};

function App() {
  return <StackNavigator />;
}

export default App;
