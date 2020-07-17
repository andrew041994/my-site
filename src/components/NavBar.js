import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class NavBar extends Component {

//  handleClick = (e) => {
//    e.preventDefault()
  
// }


  render() {
    return (
      <div>
        {/* <Link to='https://github.com/andrew041994'}> */}
          <Button onClick={() => window.open("https://github.com/andrew041994")} variant="link"><strong>GitHub</strong></Button>
        {/* </Link> */}


       </div>
    );
  }
}
