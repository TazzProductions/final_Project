import React from 'react';
import TopNav from './TopNav';
// import BrandButton from './BrandButton'


class Header extends React.Component {

  render() {
    return ( 
      <header className="header-nav">
        <TopNav />

        <div className="promotion-text">
          <span className="mt25-prc ml25-prc fancy-title-span pointed"><strong>LUXURY CAR RENTAL &amp; EXOTIC CAR RENTAL SERVICES</strong></span>
        </div>

        <div className="ml45-prc view-product-button">
          <a href="#brands">Searh A Brand<i className="ml5 far fa-eye" /></a>
        </div>
        
        </header> 
    )
  }
}


export default Header