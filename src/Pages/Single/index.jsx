import * as React from "react";
import { Card, CardImg, CardTitle, CardText } from "reactstrap";
import { useLocation } from "react-router-dom";

import "./_style.scss";
import Title from "../../Components/Atoms/Title";

export default function Single({ ...props }) {
  const location = useLocation();
  const { state } = location;

  return (
    <div className="wrap-single">
      <Card
        body
        inverse
      >
        <CardImg
          alt="Card single"
          src={state.i.imageUrl || ""}
          top
        />
        <Title className="title_single" level={1} title={state.l || " "} />
        <CardText>Famous: {state.s || " "}</CardText>
      </Card>
    </div>
  );
}
