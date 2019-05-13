import React from 'react';


class Footer extends React.Component {

  render() {
    return ( 
      <footer id="wrap-footer" className="bg-gray-1">
  <div className="footer-top">
    <div className="container">
      <div className="bg-gray-1 p-l-r">
        <div className="row">
          {/* Company info */}
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="heading-1">
              <h3>Company Info</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod temp incidunt ut .</p>
            <div className="iconNtext">
              <ul className="list-default">
                <li><i className="fa fa-signal" />123 Holding, Busan, Korea</li>
                <li><a href="tel:01686813774"><i className="fa fa-phone" />+1 601 555 5555</a></li>
                <li><i className="fas fa-envelope-open-text" />Support@htmlcs.com</li>
                <li><i className="fa fa-globe" />http://www.ndktheme.com</li>
              </ul>
            </div>
          </div>
          {/* Newsletter */}
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="newsletter text-left">
              <div className="heading-1">
                <h3>Newsletter</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod temp incidunt ut </p>
              <form>
                <div className="form-group">
                  <input type="email" className="form-control form-item" id="Email1" placeholder="Email" />
                </div>
                <div className="wrap">
                  <button className="button suscribe">Suscribe Here</button>
                </div>
              </form>
            </div>
          </div>
          {/* Quick link */}
          <div className="col-sm-4">
            <div className="heading-1">
              <h3>Quick Link</h3>
            </div>
            <ul className="ql-list list-default">
              <li><a href="#ph"><i className="fa fa-angle-right" />Privacy Policy</a></li>
              <li><a href="#ph"><i className="fa fa-angle-right" />Community</a></li>
              <li><a href="#ph"><i className="fa fa-angle-right" />Blog</a></li>
              <li><a href="#ph"><i className="fa fa-angle-right" />Guide use</a></li>
              <li><a href="#ph"><i className="fa fa-angle-right" />Our Servces</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <p>© 2019 Designed by <a href='/'>D'Micheal McElroy</a>. All rights reserved</p>
        </div>
      </div>
    </div>
  </div>
</footer>


    )
  }
}


export default Footer

