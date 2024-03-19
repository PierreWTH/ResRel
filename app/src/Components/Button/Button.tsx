import "./Button.css";

import React from "react";

type ButtonProps = {
  submit?: boolean;
  label: string;
  Icon?: React.ComponentType;
};

const Button: React.FC<ButtonProps> = ({ label, submit = false, Icon }) => {
  return (
    <button className="custom-button" type={submit ? "submit" : "button"}>
      {label}
      {Icon && <Icon />}
    </button>
  );
};

export default Button;
