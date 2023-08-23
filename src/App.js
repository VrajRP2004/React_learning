// import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import TextForm07 from './components/TextForm07';
import Alert from './components/Alert';
// import About from './components/About';
import { useState } from 'react';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert,setalert] = useState(null);
  const showalert = (message,type) =>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },3000);

  }

  const toggleMode = ()=>{
   if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#343a40';
    showalert("Dark mode has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black'
    showalert("Light mode has been enabled","success");

    
  }
  }
  return (
  <>
  {/* <Router> */}
      <NavBar title = "TextUtils2" mode = {mode} toggleMode={toggleMode}/>
      <Alert alert={alert}></Alert>
  <div className="container my-3">
      <TextForm07 showalert={showalert} heading = "Enter the text to analyze below" mode={mode}/>
      </div>
    {/* 
    <div className="container my-3">
          {/* <About mode={mode}></About> */}
        {/* </div>
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          
          <Route exact path="/" element={<TextForm07 showalert={showalert} heading = "Enter the text to analyze below" mode={mode}/>}>
            </Route>
        </Routes>
        </Router> */} 

  </>
  );
}

export default App;
