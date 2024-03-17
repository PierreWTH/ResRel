import { forwardRef } from "react";
import "./InputText.css";

type Props = {
  label: string;
  password?: boolean;
  placeholder?: string;
};

const InputText = forwardRef(
  ({ label, placeholder, password = false, ...props }: Props, ref: any) => (
    <div className="input-wrapper">
      <label>{label}</label>
      <input
        ref={ref}
        className="input"
        type={password ? "password" : "text"}
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
);

export default InputText;
