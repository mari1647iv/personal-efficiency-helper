import React, { FC, HTMLAttributes } from "react";
import "./Modal.css";

const Overlay: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
  return (
    <div className="overlay" {...rest}>
      {children}
    </div>
  )
}

export default Overlay;
