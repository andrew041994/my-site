import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import twitter from '../images/twitter.png'
import git from '../images/git.png'
import linkedin from '../images/linkedin.png'
// {{"width" : "40px", "height" : "40px", "cursor" : "pointer"}}
const useStyles = makeStyles({
  gitStyle: {
    width: '50px',
    height: '50px',
    backgroundColor: 'dark',
    cursor: 'pointer',
    position: 'relative',
    top: '-50px',
    left: '1500px'
    },

  twitterStyle: {
    width: '50px',
    height: '50px',
    backgroundColor: 'dark',
    cursor: 'pointer',
    position: 'relative',
    top: '-98px',
    left: '1570px'
    },

  linkedinStyle: {
    width: '50px',
    height: '50px',
    backgroundColor: 'dark',
    cursor: 'pointer',
    position: 'relative',
    top: '-144px',
    left: '1640px'
    }

})

export default function Nav() {
  
  const classes = useStyles();

 
  
    return (
      <div> 
          <div  onClick={() => window.open("https://github.com/andrew041994")} >
          <Avatar className={classes.gitStyle} alt="G" src={git} />
          </div>
          <div onClick={() => window.open("https://twitter.com/andrew041994")} >
            <Avatar className={classes.twitterStyle} alt="T" src={twitter} />
          </div>

          <div onClick={() => window.open("https://www.linkedin.com/in/alehandro-persaud/")} >
            <Avatar className={classes.linkedinStyle} alt="L" src={linkedin} />
          </div>

        <Button onClick={() => window.open("https://github.com/andrew041994")} 
      variant="contained" color="primary"><strong>GitHub</strong></Button>
         
      <Button onClick={() => window.open("https://twitter.com/andrew041994")} 
      variant="contained" color="primary"><strong>Twitter</strong></Button></div>
    );
  }

