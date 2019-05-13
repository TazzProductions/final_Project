import React from "react";

import Home from './Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CarGrid from './Car-Grid';
import SingleProduct from './SingleProduct';
// import AudiBrand from './AudiBrand';
import BrandFilter from "./BrandFilter";
import NoCars from './NoCars'
// import NewSingleProduct from './NewSingle;Product'


function App(){ 
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/products" component={CarGrid} />
          <Route path="/product/:id" component={SingleProduct} />
          <Route path="/brands/:brandSlug" component={BrandFilter} />
          <Route path='/no-cars'component={NoCars} />
        </Switch>
      </BrowserRouter>
    )
  }
  export default App;