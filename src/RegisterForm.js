import { useState, useRef } from "react";

export default function RegisterForm() { 

    const [form, setForm] = useState( {
        firstName: "Luke",
        lastName: "Jones",
    });

    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
    };

    return (
        <div>
            <label>
                First Name: 
                <input
                    value = {form.firstName} 
                    onChange = {e => {
                        setForm({...form, firstName: e.target.value});
                    }}
                />
            </label>
            <label>
                Last Name:
                <input
                    value = {form.lastName}
                    onChange = {e => {
                        setForm({...form, lastName: e.target.value});
                    }}
                />
            </label>
            <button onClick = { e => {
                setForm({...form, firstName: "Luke", lastName: "Jones"});
            }}>
                clear
            </button>
            <p>
                {form.firstName} {' '}
                {form.lastName}
            </p>
            <div>
                <>
                    <input ref = {inputEl} type = "text" />
                    <button onClick = {onButtonClick}>Focus the input.</button>
                </>
            </div>
        </div>
    
    );
}