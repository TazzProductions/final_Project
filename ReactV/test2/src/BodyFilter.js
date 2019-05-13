import React from 'react';


function BodyFilter() {
  return (
    
      <div>
      <div className="choose-body-type">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h3>What Type Are You ?</h3>
          </div>
        </div>
      </div>
      <div className="product-row">
        <div className="container">
          <div className="row">

            <div className="col-sm-3">
            <a href='/'>
              <img src="../images/bf1.png" alt="" />
              <div className="choose-bottom-text">
                <label>LUXURY SEDAN</label>
              </div>
            </a>
            </div>

            <div className="col-sm-3">   
            <a href='/'>
              <img src="../images/bf2.png" alt='' />
              <div className="choose-bottom-text">
                <label>EXOTIC COUPES</label>
              </div>
            </a>
            </div>

            <div className="col-sm-3">
            <a href='/'>
              <img src="../images/bf3.png" alt='' />
              <div className="choose-bottom-text">
                <label>CONVERTIBLES</label>
              </div>
            </a>
            </div>


            <div className="col-sm-3">
            <a href='/'>
              <img src="../images/bf4.png" alt='' />
              <div className="choose-bottom-text">
                <label>LUXURY SUV</label>
              </div>
            </a>
            </div>

          </div>
        </div>
      </div>
    </div>
    
      </div>
  );
};

export default BodyFilter;


