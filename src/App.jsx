import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import CountField from "./components/CountField/CountField";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("0");
  const [isResult, setIsResult] = useState(false); 

  const handleAddValue = (value) => {
    if (value === "=") {
      try {
        const mathInput = input.replace(/√/g, "sqrt"); 
        const evalResult = evaluate(mathInput);
        setResult(evalResult);
        setInput(evalResult.toString());
        setIsResult(true); 
      } catch {
        setResult("error");
        setInput("0");
        setIsResult(true);
      }
    } else if (value === "C") {
      setInput("0");
      setResult("0");
      setIsResult(false);
    } else if (value === "√") {
      if (isResult) {
        setInput("√");
        setIsResult(false);
      } else {
        setInput((prev) => `√(${prev})`);
      }
    } else {
      if (isResult) {
        setInput(value);
        setIsResult(false);
      } else {
        setInput((prev) => (prev === "0" ? value : prev + value));
      }
    }
  };

  return (
    <>
      <CountField addValue={input} result={result} />
      <div className="button-container">
        <Buttons btnType="number" onClick={handleAddValue} />
        <Buttons btnType="operator" onClick={handleAddValue} />
        <Buttons btnType="function" onClick={handleAddValue} />
      </div>
    </>
  );
}

export default App;
