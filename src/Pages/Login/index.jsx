import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

import { FlagJona } from "../../Components/Molecules/Bandera";

/** Import utils */
import makeToken from "../../utils/useRandomString";

/** Import CSS */
import "./_login.scss";

export default function Login(props) {
  const [userAccount, setUserAccount] = useState("");
  const [userPass, setUserPass] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const generateToken = async () => {
    if (
      !userAccount ||
      !userAccount?.length ||
      !userPass ||
      !userPass?.length
    ) {
      alert("Campos incompletos");
    }
    const tokenUserToSave = await makeToken(8);
    if (tokenUserToSave) localStorage.setItem("tokenUser", tokenUserToSave);
    window.location.reload();
  };

  return (
    <Container
      className={`${darkMode ? "Login--dark" : "Login"} bg-light border`}
      fluid
    >
      <Form inline>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <div className="wrap-image">
            <img
              alt="logo page"
              src="images/reactjs-hooks.png"
              className="image-avatar-login"
            />
          </div>
        </FormGroup>

        <FlagJona />

        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label
            className={`Login__Input--${darkMode ? "dark" : "light"} me-sm-2`}
            for="exampleEmail"
          >
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            value={userAccount}
            onChange={(e) => setUserAccount(e.target.value)}
            placeholder="account"
            type="email"
          />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label
            className={`Login__Input--${darkMode ? "dark" : "light"} me-sm-2`}
            for="examplePassword"
          >
            Password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            value={userPass}
            onChange={(e) => setUserPass(e.target.value)}
            placeholder="password"
            type="password"
          />
        </FormGroup>

        <div className="btn--view">
          <Button color="primary" onClick={() => generateToken()}>
            Ingresar
          </Button>
        </div>
      </Form>

      <span
        className="Login__darkbtn--primary"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light" : "Dark"}
      </span>
    </Container>
  );
}
