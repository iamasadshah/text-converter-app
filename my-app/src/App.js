import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState(`light`);
    
  const toggleMode = () =>{
   
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'dark';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'light';
    }
  }
  return (
    <>
    
      <Navbar title="Text Converter" mode={mode} toggleMode={toggleMode}/>
      <div className="container"> 
      <TextForm mode={mode} heading = "Enter Text to Analyze"/>
      </div>
    </>
  );
}

export default App;