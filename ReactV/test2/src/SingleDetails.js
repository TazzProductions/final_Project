import React from 'react';

function SingleDetails(props){
  return ( 
    <React.Fragment>
      <div className="single-rental">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="img-holder">
              {/* Targeting the image using the props that are in a relation to an external file */}

                <img src={"../" + props.img} alt='' id="pimg" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="txt-holder">
              {/* props are the object sumed up until its last key value pair */}
                <h3 id="single-header-txt">{props.PName}</h3>
                <p id="single-about-txt">{props.Pabout}</p>
                <h3 id="single-cost-txt">The Price To Rent A <h3 id="single-header-txt">{props.PName}</h3> In LA</h3>
                <p id="single-cost-about">{props.PCabout}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


export default SingleDetails

