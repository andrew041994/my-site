
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import logo from '../images/profilePic.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '10px',
    backgroundImage: "url('public/wallPaper.png')"
  },
  logoStyle: {
    marginRight: theme.spacing(2),
    cursor: 'pointer',
    width: '68px',
    height: '68px'
  },
  title: {
    flexGrow: 1,
  },
  iconStyle: {
    marginRight: theme.spacing(2),
    cursor: 'pointer',
    width: '30px',
    height:'30px'
  }

}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
           <Avatar onClick={()=> window.location.reload(true)} alt="A" src={logo} className={classes.logoStyle} />           
           <Typography variant="h6" className={classes.title}>
              Alehandro Persaud
           </Typography>
           <GitHubIcon className={classes.iconStyle} onClick={() => window.open("https://github.com/andrew041994")}/>
           <LinkedInIcon className={classes.iconStyle} onClick={() => window.open("https://www.linkedin.com/in/alehandro-persaud/")}/>
           <TwitterIcon className={classes.iconStyle} onClick={() => window.open("https://twitter.com/andrew041994")}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}



