import React from 'react';


function SingleSpecs(props) {
  return (
    <div>
  <div className="single-product-detail">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="single-detail-header">SPECIFICATIONS</h3>
        </div>
      </div>
    </div>
  </div>
  <div className="details">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <i className="fas fa-money-bill-wave" />
          <h3> MSRP: <p id="specs">{props.price}</p>
          </h3>
        </div>
        <div className="col-sm-6">
          <i className="fas fa-car" />
          <h3> Transmission: </h3><h3>{props.transmission}</h3>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
        <i className="fas fa-tachometer-alt" />
          <h3>{props.tachometer}</h3>
        </div>
        <div className="col-sm-6">
          <i className="fas fa-burn" />
          <h3> MPG: <p id="specs">{props.mpg}</p>
          </h3>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <i className="fas fa-cogs" />
          <h3> Engine: </h3><h3>{props.engine}</h3>
        </div>
        <div className="col-sm-6">
          <i className="fas fa-horse-head" />
          <h3> Horsepower: </h3><h3>{props.horsepower}</h3>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default SingleSpecs;
