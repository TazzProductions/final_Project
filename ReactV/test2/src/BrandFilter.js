import React, { Component } from 'react';
import AudiBrand from './AudiBrand'
import TopNav from './TopNav';
import BodyFilter from './BodyFilter'
import Footer from './Footer';
import GlobalPromotion from './GlobalPromotion';
import NoCars from './NoCars';
import { Redirect } from 'react-router-dom';

class BrandFilter extends Component {
  constructor() {
    super()
    this.state = {
      brandProduct: {
        id: '',
        PName: '',
        BName: '',
        img: '',
        brandSlug: '',
      }

    }
  }

  
  componentDidMount() {
    fetch("http://localhost:9000/api/vehicles/brands")
    .then(data => data.json())
    .then(products => {
      let brandProduct = products.find(item => {
        return item.brandSlug === this.props.match.params.brandSlug ? item : null;
      });
      this.setState({
        loading: false,
        brandProduct

      });
      if (brandProduct === undefined) {
        window.location.href = 'http://localhost:3000/no-cars'
          
        }
        console.log(brandProduct)
      });
  }

  render() {
    let brandProduct = this.state.brandProduct;

    return (
      <div>
      <header className="header-nav">
        <TopNav />
      </header>
      <BodyFilter />
      <GlobalPromotion />
      <AudiBrand {...brandProduct} />
      <Footer />
      </div>
    ); 
  }


}

export default BrandFilter
// <Route path='/no-cars' component={NoCars}