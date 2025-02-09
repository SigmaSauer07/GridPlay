import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="About">
      <Header />
      <main>
        <h2>About GridPlay</h2>
        <p>GridPlay is a digital sports squares game...</p>
      </main>
      <Footer />
    </div>
  );
}

export default About;
