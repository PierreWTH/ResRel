import { forwardRef } from "react";
import "./TextArea.css";

type Props = {
  label: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
};

const TextArea = forwardRef(
  ({ label, placeholder, rows = 20, cols = 5, ...props }: Props, ref: any) => (
    <div className="textarea-wrapper">
      <label>{label}</label>
      <textarea
        ref={ref}
        className="textarea"
        placeholder={placeholder}
        {...props}
        rows={rows}
        cols={cols}
      />
    </div>
  )
);

export default TextArea;
