import React from 'react';
import Header from './Header';
import HomePromotioinText from './HomePromotionText';
import TopDecorationImg from './TopDecorationImg';
import Brands from './Brands';
import BottomDecorationImg from './BottomDecorationImg';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Header />
      <HomePromotioinText />
      <TopDecorationImg />
      <Brands />
      <BottomDecorationImg />
      <Footer />
    </div>
  );
};

export default Home;
