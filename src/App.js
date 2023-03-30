import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Bag from './Bag';
import avatar from './logo192.png';
import Btn from './Btn';

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
  return (
    // <div className="App">
    //   <Header name = {firstName} color = "Purple" />
    //   <Main greet = "Howdy" />
    //   <Logo> Hello, I'm testing the props.children. </Logo>
    // </div>
    <Btn clickHandler = {clickHandling}/>
    
  );
}

export default App;
