import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import React, { useState } from 'react';

function App() {
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
    }else{
      setMode('light');
    }
  }
  const [mode, setMode] = useState(`light`);
  return (
    <>
    
      <Navbar title="Text Converter" mode={mode} toggleMode={toggleMode}/>
      <div className="container"> 
      <TextForm heading = "Enter Text to Analyze"/>
      </div>
    </>
  )
}

export default App;