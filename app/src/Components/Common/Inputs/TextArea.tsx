import { forwardRef } from "react";
import styled from "styled-components";
import { Label } from "@style/components";

type Props = {
  label: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
};

const InputTextArea = forwardRef(
  ({ label, placeholder, rows = 20, cols = 5, ...props }: Props, ref: any) => (
    <Wrapper>
      <Label>{label}</Label>
      <TextArea
        ref={ref}
        className="textarea"
        placeholder={placeholder}
        {...props}
        rows={rows}
        cols={cols}
      />
    </Wrapper>
  )
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: inherit;
  font-size: inherit;
`;

export default InputTextArea;
