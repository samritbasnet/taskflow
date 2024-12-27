// app/page.js
import React from 'react';
import Header from './components/Header';
import Home from './pages/home';
const HomePage = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

export default HomePage;
