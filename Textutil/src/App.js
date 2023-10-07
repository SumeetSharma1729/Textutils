import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import About from './components/About';



document.body.style.backgroundColor ='#FFF8DC';
function App() {
  const [mode ,setMode] =useState('light');
  const [alert, setAlert]= useState(null);
  const [DarkMode ,setDarkMode] =useState("#343434");

  const showDarkMode =(dm) => {
      setDarkMode(dm);
      document.body.style.backgroundColor =  DarkMode
  }
  const showAlert = (message,type) =>{
    setAlert(
      {
        msg :message,
        type :type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }
  // '#000063' 
  const toggleMode =() => {
    if (mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor ='#FFF8DC';
      showAlert(" Light mode enabled","success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = DarkMode ;
      showAlert(" Dark mode enabled ","success");


    }
  }
  return (
    <>

<Router>
      <Navbar mode={mode} toggleMode={toggleMode} showDarkMode={showDarkMode} />
      <Alert alert={alert}/>
      <div className='container my-3'>
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} /> 
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze :" mode={mode} showAlert={showAlert}/>} />
        </Routes>
        </div>
  </Router>
   
    
    
    </>

  );
}

export default App;
