import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SinglePage from './components/SinglePage';

function App() {

  const [sections] = useState([
    { name: 'About Me'},
    { name: "GitHub Repo's"},
    { name: 'Deployed Projects'},
    { name: 'Resume'}
  ]);

  const [pageSelected, setPageSelected] = useState(false);
  const [currentSection, setCurrentSection] = useState({ name: 'About Me'});

  return (
    <div>
    <div className = 'container'>
      <header className = 'header-container'>
        <Header
        sections = {sections}
        currentSection = {currentSection}
        setCurrentSection = {setCurrentSection}
        pageSelected = {pageSelected}
        setPageSelected = {setPageSelected}
        ></Header>
      </header>
      <main className = 'main-body'>
        <SinglePage currentSection = {currentSection}></SinglePage>
      </main>
      </div>
      <footer className = 'footer'>
        <Footer></Footer>
      </footer>
    
    </div>
  );
}

export default App;
