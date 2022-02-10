import React from "react";

import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import ButtonComponent from "../../Atoms/Button";

import "./_card.scss";

export default function CardItemIMB({
  title,
  subtitle,
  text,
  image,
  ...props
}) {
  if (!title || !text) return null;

  const goToSingle = () => {
    if (props.onHandle) {
      props.onHandle();
    }
  };

  return (
    <Card className="card__imb">
      <CardImg
        className="card__imb--image"
        alt=""
        src={image || "https://picsum.photos/318/180"}
        top
        width="100%"
      />
      <CardBody className="card__imb--body">
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {subtitle}
        </CardSubtitle>
        <CardText>{text}</CardText>
        <ButtonComponent
          color="primary"
          text="Ver más"
          onClick={() => goToSingle()}
        />
      </CardBody>
    </Card>
  );
}
