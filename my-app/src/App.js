import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
  }

    return (
    <>
    
      <Navbar title="Text Converter" />
      <Alert alert={alert}/>
      <div className="container"> 
      <TextForm showAlert={showAlert} heading = "Enter Your Text to Analyze"/>
      </div>
    </>
  );
}

export default App;