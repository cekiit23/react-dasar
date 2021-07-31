import React from 'react'
import logo from './logo.svg';
import Home from './Components/Functional/Home'
import Beranda from './Components/Classes/Beranda'
import About from './Components/Functional/About'
import './App.css';

function App() {
  return (
    <div className="App">
     <Home/>
     <Home/>
     <Home/>
     <Home/>
     <Beranda />
     <About/>
    </div>
  );
}

export default App;
