import React from "react";

import { Button } from "reactstrap";

import "./_button.scss";

export default function ButtonComponent({ color, text, ...props }) {
  return (
    <Button className="btn-custom" color={color}>
      {text}
    </Button>
  );
}
