import React from "react";

import { Button } from "reactstrap";

import "./_button.scss";

export default function ButtonComponent({ color, text, ...props }) {

  const Action = () => {
    if( props.onClick ){
      props.onClick();
    }

    return;
  }

  return (
    <Button
      className="btn-custom"
      color={color}
      onClick={Action}
    >
      {text}
    </Button>
  );
}
