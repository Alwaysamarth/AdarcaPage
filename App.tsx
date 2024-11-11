import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Industries from './components/Industries';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Solutions />
      <Industries />
      <Footer />
    </div>
  );
}

export default App;