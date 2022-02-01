import React from "react";

import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import ButtonComponent from "../../Atoms/Button";

import "./_card.scss";

export default function CardItemIMB({ title, subtitle, text, ...props }) {
  if (!title || !text) return null;

  return (
    <Card className="card__imb">
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {subtitle}
        </CardSubtitle>
        <CardText>{text}</CardText>
        <ButtonComponent color="primary" text="Click aquí" />
      </CardBody>
    </Card>
  );
}
