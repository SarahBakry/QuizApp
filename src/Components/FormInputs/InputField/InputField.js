import "./InputField.css";

const InputField = (props) => {
  const { label, name, value, onChange, type, required } = props;
  return (
    <div className="w-100 flex flex-wrap">
      <label className="w-100 py-2 flex justify-start bold">{label}</label>
      <input
        type={type}
        className="w-100"
        name={name}
        value={value}
        required={required}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};
export default InputField;
