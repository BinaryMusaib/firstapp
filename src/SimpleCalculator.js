import { useState, useRef } from "react";

export default function SimpleCalculator() {

    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    const plus = (e) => {
        e.preventDefault();
        setResult((result) => result + Number(inputRef.current.value));
        console.log(e);
    }
    const resetInput = (e) => {
        e.preventDefault();
        inputRef.current.value = 0;
    }
    const resetResult = (e) => {
        e.preventDefault();
        setResult((previousValue) => previousValue * 0);
    }
    return(
        <div>
            <p ref={resultRef}> {result}</p>
            <input 
                pattern = "[0-9]"
                type = "number"
                ref={inputRef}
                maxLength = {9}
                placeholder = "Type a number"

            /><br/>
            <button onClick = {plus}>add</button>
            <button>subtract</button>
            <button>multiply</button>
            <button>divide</button>
            <button onClick={resetInput}>reset input</button>
            <button onClick={resetResult}>reset result</button>

        </div>
    );
}