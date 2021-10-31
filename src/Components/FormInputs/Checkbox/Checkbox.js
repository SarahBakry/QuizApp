import "./Checkbox.css";
const Checkbox = (props) => {
  const { name, checked, label, onClick } = props;
  return (
    <label
      className={`w-100 ${label ? "flex justify-between items-center" : ""}`}
    >
      <input type="checkbox" name={name} checked={checked} onClick={onClick} />
      <label className="w-80 flex items-center bold ">{label}</label>
    </label>
  );
};

export default Checkbox;
