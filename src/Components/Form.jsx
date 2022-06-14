import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

function FormLogin() {
  return (
    <div className="container-fluid">
      <h1>
        Iniciar Sesión
      </h1>
      <Form inline>
        <FormGroup floating>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
            className=""
          />
          <Label for="exampleEmail">Correo:</Label>
        </FormGroup>{" "}

        <FormGroup floating>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            className=""

          />
          <Label for="examplePassword">Contraseña:</Label>
        </FormGroup>{" "}
 
        <Button>Iniciar</Button>
      </Form>
    </div>
  );
}

export default FormLogin;
