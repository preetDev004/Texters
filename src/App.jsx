import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Text from './Components/Text';
import About from './Components/About';
import React from 'react';
import Footer from './Components/Footer';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {   
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('success')
      document.body.style.backgroundColor = '#343a40'
      document.body.style.color = 'white'

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }

  return (
    <>
     <div>
        <Navbar mode={mode} toggleMode={toggleMode} title='Texters' abouttext='About us' />
        <Alert alert={alert} />
        <div className="container">
          <Text mode={mode} showAlert={showAlert} headding='Enter text below' />
        </div>
        <div className="container my-3">
          <About mode={mode}/>
        </div>
        <Footer mode={mode}/>
     </div>
       
    </>
  );
}

export default App;
