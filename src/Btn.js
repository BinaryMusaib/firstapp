// function Btn() {
//     const clickHandler = () => console.log('clicked');
//     return (
//         <button onClick={clickHandler}>
//             Click me
//         </button>
//     );
// }

// export default Btn;

// function Btn() {
//     const clickHandler = () => console.log('mouse over');
//     return (
//         <button onMouseOver={clickHandler}>
//             Click me
//         </button>
//     );
// }

// export default Btn;

export default function Btn(props) {
    return (
        <div>
            <button onClick={props.clickHandler}>
                click me!
            </button>

            
            <button onClick={function() {console.log("first example");}}>
                An inline anonymous ES5 function event handler.
            </button>

    
            <button onClick={() => {
                console.log("second");
                let userInput = prompt("type a number");
                alert(`The number is : ${userInput} ...`);
            }}>
                An inline anonymous ES6 function event handler.
            </button>``




        </div>
        
    );
}