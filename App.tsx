import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Solutions from './Solutions';
import Industries from './Industries';
import Footer from './Footer';

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
