import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {

  const [sections] = useState([
    { name: 'About Me'},
    { name: 'Portfolio'},
    { name: 'Contact'},
    { name: 'Resume'}
  ]);

  const [currentSection, setCurrentSection] = useState({ name: 'About Me'});

  return (
    <div>
      <header>
        <Header></Header>
        <Nav
        sections = {sections}
        currentSection = {currentSection}
        setCurrentSection = {setCurrentSection}
        ></Nav>
      </header>
      <main>
        
      </main>
    </div>
  );
}

export default App;
