import { forwardRef } from "react";
import { Label } from "@style/Components";
import styled from "styled-components";

type Props = {
  label: string;
  password?: boolean;
  placeholder?: string;
};

const InputText = forwardRef(
  ({ label, placeholder, password = false, ...props }: Props, ref: any) => (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        ref={ref}
        className="input"
        type={password ? "password" : "text"}
        placeholder={placeholder}
        {...props}
      />
    </Wrapper>
  )
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export default InputText;
