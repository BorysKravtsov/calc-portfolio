import { useState } from "react";
import "./CountField.css";

function CountField({addValue, result}){
    const [input, setInput] = useState("0");
    return(
        <div className="count-field">
      <div className="input-display">{addValue}</div>
      <div className="result-display">{result}</div>
    </div>
    );
}

export default CountField;