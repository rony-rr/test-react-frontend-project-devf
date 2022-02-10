import React from "react";

import { Button } from "reactstrap";

import "./_button.scss";

export default function ButtonComponent({ color, text, children, ...props }) {
  const Action = () => {
    if (props.onClick) {
      props.onClick();
    }

    return;
  };

  if (children) {
    return (
      <Button className="btn-custom btn-link" color={color}>
        {children}
      </Button>
    );
  }

  return (
    <Button className="btn-custom" color={color} onClick={Action}>
      {text}
    </Button>
  );
}
