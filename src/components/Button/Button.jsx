import "./Button.css";

function Button({ label, type, onClick }) {
  return (
    <button className={`button ${type}`} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

export default Button;
