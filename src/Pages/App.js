import React, { useState, useEffect } from "react";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// /** Import utils */
// import checkToken from "../utils/useTokenValidate";

// /** Import src's */
// import logo from "../logo.svg";

// /** Import components */
// import Login from "./Login";
// import Home from "./Home";
// import About from "./About";

// const StackLogin = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// };

// const StackNavigator = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// };

// function App() {
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     callCheckToken();
//   }, []);

//   useEffect(() => {
//     console.log({token});
//   }, [token]);

//   const callCheckToken = async () => {
//     const tokenTemp = await checkToken();
//     if (tokenTemp) setToken(tokenTemp);
//   };
//   if (!token) return <StackLogin />;

//   return <StackNavigator />;
// }

// export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import Title from "../Components/Atoms/Title";
import ButtonComponent from "../Components/Atoms/Button";

export default function App(props) {
  return (
    <>
      <Title title="Hola Chicos" level={1} />
      <ButtonComponent color="primary" text="Click aquí" />
      <ButtonComponent color="warning" text="Click aquí" />
      <ButtonComponent color="dark" text="Click aquí" />
    </>
  );
}
