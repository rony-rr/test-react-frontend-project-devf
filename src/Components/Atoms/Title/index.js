import React from "react";

/** Import CSS */
import "./_title.scss";

export default function Title({ title, level, className, ...props }) {
  switch (level) {
    case 1:
      return <h1 className={className + " level-1"}>{title}</h1>;
    case 2:
      return <h2 className={className + " level-2"}>{title}</h2>;
    case 3:
      return <h3 className={className + " level-3"}>{title}</h3>;
    case 4:
      return <h4 className={className + " level-4"}>{title}</h4>;
    case 5:
      return <h5 className={className + " level-5"}>{title}</h5>;
    case 6:
      return <h6 className={className + " level-6"}>{title}</h6>;
    default:
      return <h5 className={className + " level-5"}>{title}</h5>;
  }
}
