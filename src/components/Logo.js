import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import logo from '../profilePic.jpg'



export default class Logo extends Component {
 


  render() {
//  
    return (
      <div style={{"padding":"20px"
      }}>
        <Avatar alt="A" src={logo} style={{"width" : "80px", "height" : "80px", "margin" : "10px", "border" : "25px"}} />
      
   
            <Button onClick={() => window.open("https://github.com/andrew041994")} variant="contained" color="primary"><strong>GitHub</strong></Button>
         
            <Button onClick={() => window.open("https://twitter.com/andrew041994")} variant="contained" color="primary"><strong>Twitter</strong></Button>
          
       </div>
    );
  }
}
