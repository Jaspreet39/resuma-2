import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="app">
       <Header/>
       <Home/>
       <About/>
       <Resume/>
       <Work/>  
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
