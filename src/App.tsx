import React from 'react';
import './App.scss';
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./Projects/Projects";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Contacts from "./contacts/Contacts";


function App() {
  return (
      <div className='App'>
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <Contacts/>
        <Footer/>
      </div>
  );
}



export default App;
