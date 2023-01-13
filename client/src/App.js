import './App.css';
import Header from '././components/Header';
import Profile from '././components/Profile';
import About from '././components/About';
import Skills from '././components/Skills';
import Projects from '././components/Projects';
import Contact from '././components/Contact';
import Footer from '././components/Footer';

function App() {
  return (
    <div className="bg-slate-800 h-screen text-gray-400">
      <Header/>
      <Profile/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
