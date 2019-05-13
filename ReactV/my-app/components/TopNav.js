import React from 'react';

class TopNav extends Component {

  render() {
    return ( 
      <header className="header-nav">
        <div className="container">
          <div className="logo-box">
            <a>
              <img src="#" />
            </a>
          </div>
          <nav>
            <ul>
              <li><a href="newIndex.html">home</a></li>
              <li><a>Licence</a></li>
              <li><a href="newCar-grid.html">product</a></li>
              <li><a >about</a></li>
              <li><a >contact</a></li>
            </ul>
          </nav>
          <div className="promotion-text">
            <span className="mt25-prc fancy-title-span pointed"><strong>LUXURY CAR RENTAL &amp; EXOTIC CAR RENTAL SERVICES</strong></span>
          </div>
          <div className="ml45-prc view-product-button">
            <a href="#brands">Searh A Brand<i className="ml5 far fa-eye" /></a>
          </div>
        </div>
      </header> 
    )
  }
}


exprot default TopNav