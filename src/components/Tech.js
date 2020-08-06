import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

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
      
        flexGrow: 1,
  
        color: "#0657eb",
        paddingTop: "60px",
        display: "inline-block",
        
        backgroundColor: "#0c0d0d"

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
                 
            <h6>React</h6>
            <FontAwesomeIcon icon={faReact} size="3x"   /> 
            <span><h6>Rails</h6>
            <h6>Redux</h6>
            <h6>Ruby</h6>
            <h6>JavaScript</h6>
            <h6>SQL</h6>
            </span>
            </Toolbar>
            
            
           </AppBar>
            

         
           
    

           


     

            
        </div>
    );
}

export default Tech;
