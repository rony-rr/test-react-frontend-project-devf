import * as React from "react";
import { CardGroup, Card, CardBody } from "reactstrap";

import "./_style.scss";

export const FlagJona = (props) => {
  return (
    <div className="row Bandera">
      <div className="col-sm-4 Bandera__columna" />
      <div className="col-sm-4 Bandera__columna">
        <CardGroup>
          <Card>
            <CardBody className="Bandera__columna--verde" />
          </Card>
          <Card>
            <CardBody className="Bandera__columna--blanco" />
          </Card>
          <Card>
            <CardBody className="Bandera__columna--rojo" />
          </Card>
        </CardGroup>
      </div>
      <div className="col-sm-4 Bandera__columna" />
    </div>
  );
};
