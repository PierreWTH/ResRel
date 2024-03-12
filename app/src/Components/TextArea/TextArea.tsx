type Props = {
  label: string;
  value: string;
};

const TextArea = ({ label, value }: Props) => {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <textarea className="input" value={value} />
    </div>
  );
};

export default TextArea;
