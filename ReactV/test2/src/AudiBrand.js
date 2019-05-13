import React from 'react';

function AudiBrand(props){
  

    return(
      <div className='car-grid'>
        <div className="container">
          <div className="row">
            <div className="single-grid col-sm-12">
              <h2>Search By Brand</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="single-grid col-sm-4">
              <a href={props.id}>
                <img src={"../" + props.img} alt={props.brandSlug} />
                <h4>{props.PName}</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
      
    )


}

export default AudiBrand