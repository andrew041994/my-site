import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    app: {

        flexGrow: 1,
        width:" 100%",
        paddingTop: "60px",
        
      },
    resume: {
        cursor: "pointer",
       
    },
    contact: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(2),
        },
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#3f51b5",
        color: "white",
    },

  

}))

const Contact = () => {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <AppBar position="static" color="transparent"  >
            <Toolbar  className={classes.contact}>
                <h6> Email: Andrew041994@gmail.com </h6>
                <h6>Phone: (646) 716-1183 </h6>
                <h6  className={classes.resume} onClick={() => window.open("https://drive.google.com/file/d/1KGZ0a4N0_z2gGBE7KsHLcVMBJeDDUGtk/view?usp=sharing")}>Resume</h6>

                
            </Toolbar>

            </AppBar>
        </div>
    );
}

export default Contact;
