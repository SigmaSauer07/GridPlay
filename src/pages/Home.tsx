import React from 'react';
import Header from '../components/Header';
import Board from '../components/Board';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <Header />
      <Board />
      <Footer />
    </div>
  );
}

export default Home;
