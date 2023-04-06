import { useState } from "react";

export default function Hooks() {
    const [temp, setTemp] = useState("false");

    return (
        <div>

            <p> {temp} </p>
            <button onClick={() => setTemp("true")}>
                Dang!
            </button>
        </div>
    );
}