import React from 'react';
import Header from './Header/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Skill from './Pages/Skill';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import Menu from './Header/Header';


function App() {
  
  return(
    
    <>
    
          {/* <Header></Header> */}
          <Menu></Menu>
          <Home></Home>
          <About></About>
          <Project></Project>
          <Skill></Skill>
        
          <Contact></Contact>
          
          <Footer></Footer>
    </>
  );
}

export default App
