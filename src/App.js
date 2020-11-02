import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import SinglePage from './components/SinglePage';

function App() {

  const [sections] = useState([
    { name: 'About Me'},
    { name: 'Portfolio'},
    { name: 'Contact'},
    { name: 'Resume'}
  ]);

  const [pageSelected, setPageSelected] = useState(false);
  const [currentSection, setCurrentSection] = useState({ name: 'About Me'});

  return (
    <div>
      <header>
        <Header></Header>
        <Nav
        sections = {sections}
        currentSection = {currentSection}
        setCurrentSection = {setCurrentSection}
        pageSelected = {pageSelected}
        setPageSelected = {setPageSelected}
        ></Nav>
      </header>
      <main>
        <SinglePage currentSection = {currentSection}></SinglePage>
      </main>
    </div>
  );
}

export default App;
