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
          margin: theme.spacing(1),
        },
        alignContent: "center",
        color: "#0657eb",
        paddingTop: "60px",
        paddingLeft: "20px",
        display: "flex",
        
        backgroundColor: "#0c0d0d"

    },
    avatar: {
        padding: "20px"
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

        
            <Toolbar className={classes.tech}>
                 
            {/* <h6>React</h6> */}

            <Avatar alt="R" src={react} />
            {/* <h6>Rails</h6> */}
            <Avatar alt="R" src={rails} />
            {/* <h6>Redux</h6> */}
            <Avatar alt="R" src={redux} />
            {/* <h6>Ruby</h6> */}
            <Avatar alt="R" src={ruby} />
            {/* <h6>JavaScript</h6> */}
            <Avatar alt="R" src={javascript} />
            {/* <h6>SQL</h6> */}
            <Avatar alt="R" src={SQL} />
            
            </Toolbar>
            
            
           </AppBar>
            

         
           
    

           


     

            
        </div>
    );
}

export default Tech;
