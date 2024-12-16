
import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Gallery from './Component/Gallery';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Services from './Component/Services';
import Why from './Component/Why';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Why/>
        <Gallery/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
