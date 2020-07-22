import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../images/profilePic.jpg'
// style={{"width" : "80px", "height" : "80px"}}
const useStyles = makeStyles({
  logoStyle: {
    width: '100px',
    height: '100px',
    // backgroundColor: 'dark',
    cursor: 'pointer',
    position: 'relative',
    top: '20px',
    left: '120px'
    

  }
})

export default function Logo()  {
 
  const classes = useStyles();



//  
    return (
      <div >
        <Avatar alt="A" src={logo} className={classes.logoStyle} />
      
   
            
          
       </div>
    );
  }

