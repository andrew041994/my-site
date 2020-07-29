import React, { Component } from 'react';
import Nav from './nav';
import About from './About';

export default class Home extends Component {
  render() {
    return (
      <div>
      
         <Nav />
         <About/>
         </div>
    );
  }
}
