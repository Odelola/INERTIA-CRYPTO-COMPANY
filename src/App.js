import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header';
import Services from './components/Services';
import Cta from './components/Cta';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <main id="main">
        <Header />
        <Services />
        <Cta />
        <Testimonials />
        <News />
        <Footer />
      </main>
    </>
  );
}

export default App;
