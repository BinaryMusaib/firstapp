import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Bag from './Bag';
import avatar from './logo192.png';
import Btn from './Btn';
import InputComponent from './InputComponent';
import Hooks from './Hooks';
import RegisterForm from './RegisterForm';
import PropDrilling from './PropDrilling';
import Homepage from './Homepage';
import Aboutme from './Aboutme';
import { Route, Routes, Link } from 'react-router-dom';
import testImage from './assets/images/photo.jpeg';

function Logo(props) {
  const userPic = <img src = {avatar} />;
  return (
    <div>
      {userPic}
      {props.children}
    </div>
  )
}

function App() {
  const firstName = "Musaib Samar"
  const clickHandling = () => console.log("clicked...");
  const temp = false;
  return (
    <div>
    {/* // // <div className="App">
    // //   <Header name = {firstName} color = "Purple" />
    // //   <Main greet = "Howdy" />
    // //   <Logo> Hello, I'm testing the props.children. </Logo>
    // // </div> */}
      {/* <Btn clickHandler = {clickHandling}/>
      <Heading /> */}
      <InputComponent />
      <RegisterForm />
      <PropDrilling />
      {temp ? <Homepage /> : <RegisterForm />}
      
      <div style={{padding: "20px", margin: "10px"}}>
        <nav style={{ border: "10px solid red", textAlign: "justify" }}>
          <Link to = "/"> Homepage</Link>
          <Link to = "/about-me"> About me</Link>
        </nav>
        <Routes>
          <Route path = "/" element = { <Homepage /> } />
          <Route path = "/about-me" element = { <Aboutme /> } />
        </Routes>
        
      </div>
      <img
        height = {200}
        src = {testImage}
        alt = {"Test Image."}
      />
      <img
        height = {200}
        src = {require("./assets/images/photo.jpeg")}
      />
    </div>
    
  );
}

export default App;
