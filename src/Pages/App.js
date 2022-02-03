import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/** Import Slick CSS */
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

/** Import Bootstrap CSS */
import "bootstrap/dist/css/bootstrap.min.css";

// /** Import utils */
import checkToken from "../utils/useTokenValidate";

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

/** Import Pages */
import Home from "./Home/index";
import Login from "./Login/index";

const StackLogin = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

const StackNavigator = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>
    </Router>
  );
};

export default function App(props) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    callCheckToken();
  }, []);

  useEffect(() => {
    // console.log({ token });
  }, [token]);

  const callCheckToken = async () => {
    const tokenTemp = await checkToken();
    if (tokenTemp) setToken(tokenTemp);
  };

  if (!token) return <StackLogin />;

  return <StackNavigator />;
}
