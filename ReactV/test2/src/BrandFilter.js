import React, { Component } from 'react';
import AudiBrand from './AudiBrand'
import TopNav from './TopNav';
import BodyFilter from './BodyFilter'
import Footer from './Footer';
import GlobalPromotion from './GlobalPromotion';
// import NoCars from './NoCars';
// import { Redirect } from 'react-router-dom';

class BrandFilter extends Component {
  constructor() {
    super()
    this.state = {
      brandProduct: [],
      brandName: {
        BName: '',
      }
    }
  }

  
  componentDidMount() {
    console.log(this.props.match.params.brandSlug)
    fetch("http://localhost:9000/api/vehicles/brands/" + this.props.match.params.brandSlug)
    .then(data => data.json())
    .then(products => {
      console.log(products)
      this.setState({
        brandProduct: products,
        brandName: this.props.match.params.BName
        });
        console.log(this.state.brandProduct)
        let brandName = products.find(item =>{
          return item;
        })
        console.log(brandName)
      });
        // if (this.state.brandProduct === undefined) {
        //   window.location.href = 'http://localhost:3000/no-cars'
        // }
      //  => {
        // return item.brandSlug === this.props.match.params.brandSlug ? item : null;

        
        //   console.log(brandProduct)
      };

  render() {
    let brandProduct = this.state.brandProduct.map((brandProduct) => {
      return(
        <div className='car-grid'>
        <div className="single-grid col-sm-4">
        <a href={"/product/" + brandProduct.id}>
        <img src={"../" + brandProduct.img} alt={brandProduct.brandSlug} />
        <h4>{brandProduct.PName}</h4>
        </a>
        </div>
        </div>
        )
      })
      
      return (
        <div>
        <header className="header-nav">
        <TopNav />
        </header>
        <BodyFilter />
        <GlobalPromotion />
        <AudiBrand/>
        <div className="container">
        <div className="row">
        {brandProduct}
        </div>
        </div>
        <Footer />
        </div>
        ); 
      }
      
      
    }
    
    export default BrandFilter
    // <Route path='/no-cars' component={NoCars}
    {/*This is where the dynamic pages are outputed*/}
    {/*This is where the dynamic pages are generated*/}
    // let brandName = this.state.brandName