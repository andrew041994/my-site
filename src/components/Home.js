import React, { Component } from 'react';
import Nav from './nav';
import About from './About';
import Tech from './Tech'
import Skills from './Skills';
import Contact from './Contact';

export default class Home extends Component {
  render() {
    return (
      <div>
      
         <Nav />
         <About/>
         <Tech/>
         <Skills/>
         <Contact/>
         </div>
    );
  }
}
