import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import git from '../images/git.png'



export default class Nav extends Component {
  render() {
    return (
      <div> 
          <div onClick={() => window.open("https://github.com/andrew041994")}>
          <Avatar alt="A" src={git} style={{"width" : "40px", "height" : "40px", "cursor" : "pointer"}} />
          </div>
        <Button onClick={() => window.open("https://github.com/andrew041994")} 
      variant="contained" color="primary"><strong>GitHub</strong></Button>
         
      <Button onClick={() => window.open("https://twitter.com/andrew041994")} 
      variant="contained" color="primary"><strong>Twitter</strong></Button></div>
    );
  }
}
