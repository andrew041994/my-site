import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import react from '../images/react.png';
import rails from '../images/rails.png';
import redux from '../images/redux.png';
import ruby from '../images/ruby.png';
import javascript from '../images/javascript.png';
import SQL from '../images/SQL.png';
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

    tech: {   
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


const Tech = () => {
    const classes = useStyles();

    return (
        
            <div className={classes.app}> 
           <AppBar position="static" color="transparent"> 

            <Typography variant="h4" className={classes.typo}>
              Technologies
            </Typography>

            <Toolbar className={classes.label}>
              <h6>React</h6>
              <h6>Rails</h6> 
               <h6>Redux</h6> 
               <h6>Ruby</h6> 
                <h6>SQL</h6>
               <h6>JavaScript</h6> 
            </Toolbar>

            <Toolbar className={classes.tech}>                 
          
            <Avatar alt="R" src={react} />
           
            <Avatar alt="R" src={rails} />
           
            <Avatar alt="R" src={redux} />
            
            <Avatar alt="R" src={ruby} />
            
           
            <Avatar alt="R" src={SQL} />
            <Avatar alt="R" src={javascript} />
            
            </Toolbar>
            
            
           </AppBar>
            

         
           
    

           


     

            
        </div>
    );
}

export default Tech;
