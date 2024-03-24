import React from "react";
import styled from "styled-components";

type ButtonProps = {
  submit?: boolean;
  label: string;
  Icon?: React.ComponentType;
  color?: string;
};

const CommonButton: React.FC<ButtonProps> = ({
  label,
  submit = false,
  Icon,
  color,
}) => {
  return (
    <Button
      type={submit ? "submit" : "button"}
      style={{ backgroundColor: color }}
    >
      {label}
      {Icon && <Icon />}
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 15px;
  width: 100%;
  background-color: transparent;
  border: 2px solid #6b63fe;
  color: #6b63fe;
  transition: 0.2s;

  &:hover {
    background-color: #6b63fe;
    color: white;
  }
`;

export default CommonButton;
