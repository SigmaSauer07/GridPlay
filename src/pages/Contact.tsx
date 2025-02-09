import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="Contact">
      <Header />
      <main>
        <h2>Contact Us</h2>
        <p>For inquiries, please email us at contact@gridplay.com</p>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
