import "./Button.css";

type ButtonProps = {
  submit?: boolean;
  label: string;
};

const Button: React.FC<ButtonProps> = ({ label, submit = false }) => {
  return <button type={submit ? "submit" : "button"}>{label}</button>;
};

export default Button;
