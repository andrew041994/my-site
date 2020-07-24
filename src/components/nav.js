
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logo from '../images/profilePic.jpg'
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '10px'
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
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <div onClick={()=> window.location.reload(true)}>
        <Avatar alt="A" src={logo} className={classes.logoStyle} />         
       </div>
          <Typography variant="h6" className={classes.title}>
            Alehandro Persaud
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}





// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';
// import { makeStyles } from '@material-ui/core/styles';
// import twitter from '../images/3dtwitter.jpg'
// import git from '../images/3dgit.jpg'
// import linkedin from '../images/3dlinkedin.png'
// // {{"width" : "40px", "height" : "40px", "cursor" : "pointer"}}
// const useStyles = makeStyles({
//   gitStyle: {
//     display: 'block',
//     width: '50px',
//     height: '50px',
//     backgroundColor: 'dark',
//     cursor: 'pointer',
//     position: 'fixed',
//     top: '50px',
//     right: '400px'
//     },

//   twitterStyle: {
//     display: 'block',
//     width: '50px',
//     height: '50px',
//     backgroundColor: 'dark',
//     cursor: 'pointer',
//     position: 'fixed',
//     top: '50px',
//     right: '320px'
//     },

//   linkedinStyle: {
//     display: 'block',
//     width: '50px',
//     height: '50px',
//     backgroundColor: 'dark',
//     cursor: 'pointer',
//     position: 'fixed',
//     top: '50px',
//     right: '240px'
//     }

// })

// export default function Nav() {
  
//   const classes = useStyles();
  
//     return (
//       <div color="primary"> 
//           <div  onClick={() => window.open("https://github.com/andrew041994")} >
//           <Avatar className={classes.gitStyle} alt="G" src={git} />
//           </div>
//           <div onClick={() => window.open("https://twitter.com/andrew041994")} >
//             <Avatar className={classes.twitterStyle} alt="T" src={twitter} />
//           </div>

//           <div onClick={() => window.open("https://www.linkedin.com/in/alehandro-persaud/")} >
//             <Avatar className={classes.linkedinStyle} alt="L" src={linkedin} />
//           </div>

//         {/* <Button onClick={() => window.open("https://github.com/andrew041994")} 
//       variant="contained" color="primary"><strong>GitHub</strong></Button>
         
//       <Button onClick={() => window.open("https://twitter.com/andrew041994")} 
//       variant="contained" color="primary"><strong>Twitter</strong></Button> */}
      
//       </div>
//     );
//   }

