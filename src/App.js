import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import Alerts from './components/Alerts';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';



function App() {

  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const showAlert = ( message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
    
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = "#276db3";
      showAlert("Dark mode has been Enabled!!", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled!!", "success");
    }
  }

  

  return (
    <>
      <Router>
        <Navbar title = "TextModifier" aboutText = "About Us" mode = {mode} toggleMode = {toggleMode} alert = {alert} showAlert = {showAlert}/>
        <Alerts alert = {alert}/>
        <Routes>
          <Route exact path= '/' element = {<Textform mode = {mode} toggleMode = {toggleMode} showAlert = {showAlert} alert = {alert}/>}/>
          <Route exact path= '/about' element = {<About mode = {mode}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
