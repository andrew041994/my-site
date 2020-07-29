import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
aboutStyle: {
    color: "white",
    paddingTop: "10px",
    paddingRight: "20%",
    paddingLeft: "20%",
    textAlign: "center",
    display: "inline-block",
    backgroundColor: "black",
    

},



}))

const About = () => {
    const classes = useStyles();
    return (
          
    <div className={classes.aboutStyle}>
        <h4>About Me</h4>
        <h6>I am a Full Stack Software Engineer Experienced in Ruby, Ruby on Rails, JavaScript, 
            SQL, React and Redux based programming and a background in management. Having spent 
            6 years in the United States Marine Corps, I have developed invaluable character 
            traits such as Honor, Courage, Commitment, Honesty and Integrity that I carry with me
             everyday and in everything I do. Possess strong skills in team-building, project management 
             and conflict resolution that help tech companies drive a collaborative environment. 
             With a background in customer service, quality assurance, and work loading, I know how 
             to communicate effectively, prioritize completing tasks under pressure, meet deadlines,
              and deliver a quality product for the client
              
        </h6>  
    </div>    
          
    
    );
}

export default About;



// import React from 'react';
// 



// export default function About() {
//     
//   }

