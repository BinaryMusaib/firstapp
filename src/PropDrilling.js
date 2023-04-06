function Main(props) {
    return <Header msg = {props.msg} />;
};

function Header(props) {
    return(
        <div style={{border: "10px solid red", textAlign: "center"}}>
            <h1>Header here</h1>
            <Wrapper msg = {props.msg} />
        </div>
    );
}

function Wrapper(props) {
    return(
        <div style={{border: "10px solid yellow", textAlign: "center"}}>
            <h2>Wrapper here</h2>
            <button onClick={() => alert(props.msg)}> Click me! </button>
        </div>
    );
}

export default function PropDrilling() {
    return (
        <Main msg="I called you from PropDrilling method" />
    );
}