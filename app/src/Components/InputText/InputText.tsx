import { forwardRef } from "react";
import "./InputText.css";

type Props = {
  label: string;
  password?: boolean;
};

const InputText = forwardRef(
  ({ label, password = false, ...props }: Props, ref: any) => (
    <div className="input-wrapper">
      <label>{label}</label>
      <input
        ref={ref}
        className="input"
        type={password ? "password" : "text"}
        {...props}
      />
    </div>
  )
);

export default InputText;
