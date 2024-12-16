// import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import Features from './components/Features';

import Home from "./components/Home";
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
        <section id="banner">
           <Home/>
        </section>

        <section id="features">
           <Features/>
        </section>

        <section id="services">
           <Services/>
        </section>

        <section id="testimonials">
           <Testimonials/>
        </section>

        <section id="contact">
           <Contact/>
        </section>
    </div>
  );
}

export default App;
