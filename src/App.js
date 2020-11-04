import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
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
    <div className = 'container'>
      <header className = 'header'>
        <Header></Header>
        <Nav
        sections = {sections}
        currentSection = {currentSection}
        setCurrentSection = {setCurrentSection}
        pageSelected = {pageSelected}
        setPageSelected = {setPageSelected}
        ></Nav>
      </header>
      <main className = 'main-body'>
        <SinglePage currentSection = {currentSection}></SinglePage>
      </main>
      <footer className = 'footer'>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
