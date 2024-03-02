import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'

function App() {
    return (
    <>
    
      <Navbar title="Text Converter" />
      <div className="container"> 
      <TextForm heading = "Enter Text to Analyze"/>
      </div>
    </>
  );
}

export default App;