import React from 'react';
import TopNav from './TopNav';
import SingleDetails from './SingleDetails';
import SingleSpecs from './SingleSpecs';
import ReservationButton from './ReservationButton';
import Footer from './Footer';

class SingleProduct extends React.Component {
  // create constructor to set state's inital value apon loading
  // will fill up once the page loads in component did mount
  constructor() {
    super();
    this.state = {
      loading: true,
      product: {
        id: '',
        PName: '',
        BName: '',
        img: '',
        Pabout: '',
        PCabout: '',
        price: '',
        mpg: '',
        seatNum: '',
        tachometer: '',
        engine: '',
        horsepower: '',
        luggageCap: '',
        transmission: '',
      }


    }

  }

  componentDidMount() {
    // gater the information from the 
    fetch("http://localhost:9000/api/vehicles")
    .then(data => data.json())
    .then(products => {
      let product = products.find(item => {
        return item.id === Number(this.props.match.params.id) ? item : null;
      });
      this.setState({
        loading: false,
        product
      });
    });
  }



  render() {
    let product = this.state.product;

    return (
      <div id='change'>
      <header className="header-nav">
        <TopNav />
      </header>
      <SingleDetails {...product}/>
      <SingleSpecs {...product}/>
      <ReservationButton />
      <Footer />
      </div>
    ); 
  }
};

export default SingleProduct;


