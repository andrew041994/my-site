import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import materialUi from '../images/materialUi.png';
import linux from '../images/linux.png';
import giticon from '../images/giticon.png';
import heroku from '../images/heroku.png';

import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   app: {
 
      flexGrow: 1,
      width:" 100%",
      paddingTop: "60px",
      
    },
    typo: {
        display: "inline-block",
        textAlign: "center",
        color: "white",
        backgroundColor: "#3f51b5",
    },

    skills: {   
        display: 'flex',
        '& > *': {
          margin: theme.spacing(3),
        },
        alignItems: 'center',
        justifyContent: 'center',
        color: "#0657eb",
   
   
        backgroundColor: "#0c0d0d"

    },
    label: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(3),
        },
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#0c0d0d",
        color: "white",
    }
   
  
  }));

const Skills = () => {
    const classes = useStyles();

    return (
        
            <div className={classes.app}> 
           <AppBar position="static" color="transparent"> 

            <Typography variant="h4" className={classes.typo}>
              Skills
            </Typography>

            <Toolbar className={classes.label}>
              <h6>Linux</h6> 
               <h6>GitHub</h6> 
               <h6>Heroku</h6> 
              <h6>Material UI</h6>
               
            </Toolbar>

            <Toolbar className={classes.skills}>                 
          
           
            <Avatar alt="R" src={linux} />
           
            <Avatar alt="R" src={giticon} />
            
            <Avatar alt="R" src={heroku} />
            
            <Avatar alt="R" src={materialUi} />
            </Toolbar>
            
            
           </AppBar>
   </div>
    );
}

export default Skills;
