import React from 'react';
import AudiBrand from './AudiBrand'
import TopNav from './TopNav';
import BodyFilter from './BodyFilter'
import Footer from './Footer';
import GlobalPromotion from './GlobalPromotion';

function NoCars() {
  
  return(
    <div>
      <header className="header-nav">
        <TopNav />
      </header>
      <BodyFilter />
      <GlobalPromotion />
      <div className='noCars'>
        <h2>There are currently no cars avaible for this selection. Give us a call and we can see when we can supply your desired vehicle.</h2>
      </div>
      <Footer />
    </div>
    )
}
export default NoCars