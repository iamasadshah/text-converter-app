import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'

function App() {
  return (
    <>
    
      <Navbar title="TextUtils" about="About" />
      <div className="container"> 
      <TextForm heading = "Enter the Text to Analyze"/>
      </div>
      
    </>
  )
}

export default App;