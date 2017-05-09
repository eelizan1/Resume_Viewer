// main Component

import React, { Component } from 'react';
import './App.css';
// import Components
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Testimonials from './Components/Testimonials';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* must be in the order of appearance */}
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      </div>
    );
  }
}

export default App;
