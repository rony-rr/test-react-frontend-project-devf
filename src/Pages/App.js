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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

/** Import Data */
import DataIMB from "../Data/IMB.json";

import Title from "../Components/Atoms/Title";
import ButtonComponent from "../Components/Atoms/Button";
import CardItemIMB from "../Components/Molecules/CardItemIMB";

export default function App(props) {
  const [isShow, setIsShow] = useState(false);

  const RenderList = () => {
    const result =
      DataIMB?.d?.map((item, i) => {
        return (
          <CardItemIMB
            key={"item_card_imb_" + i}
            title={item?.l || null}
            subtitle={item?.q || null}
            text={item?.s || null}
          />
        );
      }) || null;

    return result;
  };

  return (
    <>
      <Title title="Lista desde JSON" level={1} />
      <ButtonComponent
        color="primary"
        text={isShow ? "Ocultar lista" : "Visualizar lista"}
        onClick={() => setIsShow(!isShow)}
      />
      <div
        style={{
          width: "90%",
          margin: "20 auto",
          padding: 100,
          backgroundColor: "#FDFDFD",
          borderRadius: 7,
        }}
      >
        {isShow && RenderList()}
      </div>
    </>
  );
}
