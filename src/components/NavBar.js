import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap'

export default class NavBar extends Component {

//  handleClick = (e) => {
//    e.preventDefault()
  
// }


  render() {
    return (
      <div style={{"padding":"20px",
      "colorTheme": "dark"}}>
        <Container> 
          <Row> 
          <Col xs={8} md={8}>
            <Image src="public/profile pic.jpg" roundedCircle />
          </Col>
          <Col xs={1} md={1}>
            <Button onClick={() => window.open("https://github.com/andrew041994")} variant="primary"><strong>GitHub</strong></Button>
          </Col>  
          <Col xs={1} md={1}>
            <Button onClick={() => window.open("https://twitter.com/andrew041994")} variant="primary"><strong>Twitter</strong></Button>
           </Col>
            </Row>
        </Container>
       </div>
    );
  }
}
