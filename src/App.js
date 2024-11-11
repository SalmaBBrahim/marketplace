import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar'; 
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import { Toaster } from 'react-hot-toast'; // Importez Toaster
import './App.css'; 
import Login from './components/Login/Login';
import { auth } from './firebase/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import Populaire from './components/Populaire/Populaire';
import Footer from './components/Footer/Footer';


const App = () => {
  const [orderPopup, setOrderPopup] = useState(false); 
  const [userName,setUserName]=useState("")

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup); 
  };

  useEffect(() => {
    AOS.init({ 
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,

    });
    AOS.refresh(); 
  }, []);
  useEffect(()=>
  {
    auth.onAuthStateChanged((user)=>{
      if(user)
      {
       setUserName(user.displayName) 
      }
      else
      {
        setUserName("")
      }
    });
  },[]);
  return (
    <div className="App">
      <Router>
        <Navbar handleOrderPopup={handleOrderPopup}  /> {/* Affiche Navbar sur toutes les pages */}
        <Routes>
          <Route path="/" element={<Home handleOrderPopup={handleOrderPopup} />} />
          <Route path="/login" element={<Login />} /> {/* Assurez-vous que c'est correct */}
          <Route path="/signup" element={<SignUp />} /> {/* Route pour SignUp */}
        </Routes>
        <Toaster /> {/* Affichez le Toaster pour les notifications */}
    <Populaire/>
<Footer/>
      </Router>
    </div>
  );
};

export default App;
