import React from 'react';
const About = () => {
  return (


      <div className=" a   " >
        
        <div className="row aboutholder ">
          <div className="  col-xs-12 col-s-12 offset-md-1 col-md-4 bounce-1  d-flex justify-content-center  " style={{borderRight:"2px solid pink"}}>
            <img
            src="https://i.ibb.co/db5Vf7p/fotor-2023-5-4-23-29-2.png"
            //src='https://i.ibb.co/4S32FYT/fotor-2023-5-4-23-26-36.jpg'
           // src='https://i.ibb.co/c33PBVq/20230504-190010.jpg" alt="20230504-190010'
            // src='https://i.ibb.co/dDK81RG/20230504-185859.jpg" alt="20230504-185859'
           // src="https://i.ibb.co/9tGLc6C/My-project-5-modified.png"
              style={{width: '70%', height: '', objectFit: 'contain'}}
            />
          </div>
          <div className="  col-xs-12  col-s-12  col-md-6  heading-sun " style={{paddingLeft:"30px"}}>
            <p
              className=" "
              style={{ fontFamily: 'Monoton', color: 'rgb(243, 200, 243)',}}
            >
              {' '}
             Wellcome <img src="https://img.icons8.com/color/48/null/man-raising-hand-icon.png"/>
            </p>
            <p className="abouttext">
              I'm{' '} <span className="pink2" >kumenger beyene</span> {' '}
              <span >
                 a Fullstack web developer having  specialization in <span className="pink2" > back end & front end development </span>for Over 4+ years of professional exposure.{' '}
              </span>
             Graduated in computer science and information
              techonolgy,<strong className="pink2">Bsc</strong> at{' '}
              <a
                href="https://www.amu.edu.et/"
                target="_blank"
                className="link" rel="noreferrer"
              >
                <font>Arba Minch University</font>
              </a>{' '}
            </p>
            <p  style={{ fontFamily: 'Monoton', color: 'rgb(243, 200, 243)',}}>Credentials/Educational Records</p>
            <ul style={{fontSize:"18px"}}>
              <li> <a  className="link"
              href="https://www.linkedin.com/in/kumenger-beyene-3031a515b/"
              target="_blank"
              rel="noreferrer"
            >
          Universtity of Denver
            </a></li>
              <li>  <a  className="link"
              href="https://drive.google.com/file/d/1K2XVPE-MJ2axS7vbmWsleLowv3tJ0TCf/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
        Univertsy of Helsiniki
            </a></li>
          <li>
            <a className="link" href="https://www.udemy.com/certificate/UC-8a95409b-7d4d-4d8b-a6dc-8332f733dd33/" target="_blank">
      Modern React with Readux (udemy)
            </a></li>
              <li>   <a  className="link" href="   https://www.freecodecamp.org/certification/kumengerbeyene/responsive-web-design" target="_blank">
      Responsive web design (freeCodeCamp)  
            </a></li>
              <li>    <a  className="link" href=" https://www.freecodecamp.org/certification/kumengerbeyene/javascript-algorithms-and-data-structures" target="_blank">
Data Structure and algorithms(freeCodeCamp)
            </a>
            <li>
            <a  className="link" href="  https://www.freecodecamp.org/certification/kumengerbeyene/front-end-development-libraries" target="_blank">
 Front End Development(freeCodeCamp)
            </a>
            </li></li>
              <li>  <a className="link"
              href="https://drive.google.com/file/d/1B24pyx9kHwcJrTtUMeFwjluVHMh8RXpH/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
       Arba Minch Universty 
            </a></li>
            </ul>
            
          </div>
        </div>

      </div>
    
  
  );
};
export default About;
