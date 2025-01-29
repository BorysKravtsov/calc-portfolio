import Button from "../Button/Button";
import "./Buttons.css";
import CALCULATOR_BUTTONS from "../../const/CALCULATOR_BUTTONS";

function Buttons({ btnType, onClick }) {
  return (
    <ul className={`buttons ${btnType}`}>
      {CALCULATOR_BUTTONS.filter((btn) => btn.type === btnType).map((btn, index) => (
        <li key={index}>
          <Button label={btn.label} type={btn.type} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}

export default Buttons;
