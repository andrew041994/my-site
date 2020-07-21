import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../profilePic.jpg'
// import { Button, Container, Row, Col, Image } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image'
export default class NavBar extends Component {




  render() {
    return (
      <div style={{"padding":"20px"
      }}>
        <Avatar alt="A" src={logo} />
         {/* <img src="/home/andrew/my-site/public/profilePic.jpg"/>
        <Container> 
          <Row> 
           
          <Col xs={6} md={4}>
      <Image src="holder.js/public/profilePic.jpg" roundedCircle />
    </Col>
          <Col xs={1} md={1}>
            <Button onClick={() => window.open("https://github.com/andrew041994")} variant="primary"><strong>GitHub</strong></Button>
          </Col>  
          <Col xs={1} md={1}>
            <Button onClick={() => window.open("https://twitter.com/andrew041994")} variant="primary"><strong>Twitter</strong></Button>
           </Col>
            </Row>
        </Container> */}
       </div>
    );
  }
}
