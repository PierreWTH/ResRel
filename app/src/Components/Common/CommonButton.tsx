import React from "react";
import styled from "styled-components";

type ButtonProps = {
  submit?: boolean;
  label: string;
  Icon?: React.ComponentType;
  primary?: boolean;
};

const CommonButton: React.FC<ButtonProps> = ({
  label,
  submit = false,
  Icon,
  primary = false,
}) => {
  return (
    <Button $primary={primary} type={submit ? "submit" : "button"}>
      {label}
      {Icon && <Icon />}
    </Button>
  );
};

const Button = styled.button<{ $primary?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 15px;
  width: 100%;
  background-color: ${(props) => (props.$primary ? "#6b63fe" : "white")};
  border: 2px solid #6b63fe;
  color: ${(props) => (props.$primary ? "white" : "#6b63fe")};
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$primary ? "" : "#6b63fe")};
    color: ${(props) => (props.$primary ? "" : "white")};
    border: 2px solid white;
  }
`;

export default CommonButton;
