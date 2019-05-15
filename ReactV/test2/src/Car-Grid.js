import React from 'react';
import TopNav from './TopNav';
import BodyFilter from './BodyFilter';
import Brands from './Brands';
import GlobalPromotion from './GlobalPromotion';
import AllCars from './AllCars';
import Footer from './Footer';

function CarGrid()  {
    return ( 
      <div>
        <header className="header-nav">
          <TopNav />
        </header>
        <BodyFilter />
        <GlobalPromotion />
        <Brands />
        <AllCars />
        <Footer />
      </div>

    )
} 


export default CarGrid