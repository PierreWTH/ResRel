import "./Button.css";

import React from "react";

type ButtonProps = {
  submit?: boolean;
  label: string;
  Icon?: React.ComponentType;
  color?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  submit = false,
  Icon,
  color,
}) => {
  return (
    <button
      className="custom-button"
      type={submit ? "submit" : "button"}
      style={{ backgroundColor: color }}
    >
      {label}
      {Icon && <Icon />}
    </button>
  );
};

export default Button;
