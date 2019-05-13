import React from 'react';

class TopNav extends React.Component {

  render() {
    return ( 
        <div className="container">
          <div className="logo-box">
            <a href="/">
              <img src="#" alt=''/>
            </a>
          </div>
          <nav>
            <ul>
              <li><a href="/">home</a></li>
              <li><a href="/">Licence</a></li>
              <li><a href="/products">product</a></li>
              <li><a href="/">about</a></li>
              <li><a href="/">contact</a></li>
            </ul>
          </nav>
        </div>
    )
  }
}


export default TopNav