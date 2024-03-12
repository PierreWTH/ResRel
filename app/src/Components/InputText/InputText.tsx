import { GetItem } from "../../Types/Item";
import "./InputText.css";

type Props = {
  label: string;
  value: string;
};

const InputText = ({ label, value }: Props) => {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input className="input" type="text" value={value} />
    </div>
  );
};

export default InputText;
