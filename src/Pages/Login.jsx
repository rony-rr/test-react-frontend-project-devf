import React, { useState } from "react";
import { 
    Container, Form, FormGroup, 
    Label, Input, Button 
} from "reactstrap";

/** Import utils */
import makeToken from "../utils/useRandomString";

/** Import CSS */
import "../Sass/_login.scss";

export default function Login(props) {
  const [userAccount, setUserAccount] = useState("");
  const [userPass, setUserPass] = useState("");

  const generateToken = async () => {
      if( !userAccount || !userAccount?.length || !userPass || !userPass?.length ){
          alert("Campos incompletos");
      }
      const tokenUserToSave = await makeToken(8);
      if (tokenUserToSave) localStorage.setItem('tokenUser', tokenUserToSave);
      window.location.reload();
  }

  return (
    <Container className="bg-light border" fluid>
      <Form inline>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2" for="exampleEmail">
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
          <Label className="me-sm-2" for="examplePassword">
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
        <Button onClick={ () => generateToken() } >Ingresar</Button>
      </Form>
    </Container>
  );
}
