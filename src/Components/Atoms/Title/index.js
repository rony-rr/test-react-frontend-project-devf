import React from "react";

/** Import CSS */
import "./_title.scss";

export default function Title({ title, level, ...props }) {
  switch (level) {
    case 1:
      return <h1 className="level-1">{title}</h1>;
      break;
    case 2:
      return <h2 className="level-2">{title}</h2>;
      break;
    case 3:
      return <h3 className="level-3">{title}</h3>;
      break;
    case 4:
      return <h4 className="level-4">{title}</h4>;
      break;
    case 5:
      return <h5 className="level-5">{title}</h5>;
      break;
    case 6:
      return <h6 className="level-6">{title}</h6>;
      break;
    default:
      return <h5 className="level-5">{title}</h5>;
      break;
  }
}
