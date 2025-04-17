import React from 'react';
import Hero from './components/Hero';
import TopRooftops from './components/TopRooftops';
import Stories from './components/Stories';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { rooftops } from "./data/rooftops";


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Hero />
      <TopRooftops />
      {/* <Stories /> */}
      <Footer />
    </div>
  );
}

export default App;
