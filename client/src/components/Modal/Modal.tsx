import React, { FC, HTMLAttributes } from "react";
import "./Modal.css"
import Overlay from "./Overlay";

const Modal: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
  return (
    <Overlay>
      <div className="modal-box" {...rest}>
        {children}
      </div>
    </Overlay>
  )
}

export default Modal;