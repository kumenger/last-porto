import React from 'react';
const About = () => {
  return (


      <div className=" a   " >
        
        <div className="row aboutholder ">
          <div className="  col-xs-12 col-s-12 offset-md-2 col-md-3 bounce-1  d-flex justify-content-center  " style={{borderRight:"2px solid pink"}}>
            <img
            src="https://i.ibb.co/db5Vf7p/fotor-2023-5-4-23-29-2.png"
            //src='https://i.ibb.co/4S32FYT/fotor-2023-5-4-23-26-36.jpg'
           // src='https://i.ibb.co/c33PBVq/20230504-190010.jpg" alt="20230504-190010'
            // src='https://i.ibb.co/dDK81RG/20230504-185859.jpg" alt="20230504-185859'
           // src="https://i.ibb.co/9tGLc6C/My-project-5-modified.png"
              style={{width: '70%', height: '', objectFit: 'contain'}}
            />
          </div>
          <div className="  col-xs-12  col-s-12  col-md-4 align-center heading-sun " style={{paddingLeft:"30px"}}>
            <p
              className=" "
              style={{letterSpacing: '6px', fontFamily: 'Monoton', color: 'rgb(243, 200, 243)',}}
            >
              {' '}
             Wellcome <img src="https://img.icons8.com/color/48/null/man-raising-hand-icon.png"/>
            </p>
            <p className="abouttext">
              I'm{' '} <span className="pink2" >kumenger beyene</span> {' '}
              <span >
                 a fullstack  Developer{' '}
              </span>{' '}
            
             

              one of the lucky ones to won the{' '}
              <a
                href="https://en.wikipedia.org/wiki/Diversity_Immigrant_Visa"
                target="_black"
                className="link"
              >
                Diversity visa lottery
              </a>{' '}
              that gives you the opportunity to the{' '}
              <span className="pink2">Permanent Resident Card</span>.
               Graduated in Computer Science and Information
              Techonolgy,<strong className="pink2">Bsc</strong> at{' '}
              <a
                href="https://www.amu.edu.et/"
                target="_blank"
                className="link" rel="noreferrer"
              >
                <font>Arba Minch University</font>
              </a>{' '}
            </p>
          </div>
        </div>

      </div>
    
  
  );
};
export default About;
