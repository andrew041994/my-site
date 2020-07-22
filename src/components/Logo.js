import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import logo from '../images/profilePic.jpg'



export default class Logo extends Component {
 


  render() {
//  
    return (
      <div >
        <Avatar alt="A" src={logo} style={{"width" : "80px", "height" : "80px"}} />
      
   
            
          
       </div>
    );
  }
}
