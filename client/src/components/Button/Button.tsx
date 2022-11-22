import React, { ButtonHTMLAttributes, FC } from "react";
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<any> {
  variant?: string
}

const Button: FC<ButtonProps> = ({ variant, children, ...rest }) => {
  let classname = ""
  switch (variant) {
    case "recommended":
      classname = "flat-button recommended-button"
      break
    case "icon":
      classname = "icon-button"
      break
    case "flat":
      classname = "flat-button"
      break
  }

  return (
    <button className={"button " + classname} type="button" {...rest}>
      {children}
    </button>
  );
}

export default Button;