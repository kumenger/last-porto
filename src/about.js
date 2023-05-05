import React from 'react';
const About = () => {
  return (
    <div className="">

      <div className=" a  ">
        
        <div className="row aboutholder ">
          <div className="  col-xs-12 col-s-12 offset-md-2 col-md-3 bounce-1  d-flex justify-content-center border-right-0">
            <img
           // src='https://i.ibb.co/c33PBVq/20230504-190010.jpg" alt="20230504-190010'
            // src='https://i.ibb.co/dDK81RG/20230504-185859.jpg" alt="20230504-185859'
            src="https://i.ibb.co/9tGLc6C/My-project-5-modified.png"
              style={{width: '80%', height: '', objectFit: 'contain'}}
            />
          </div>
          <div className=" col-xs-12  col-s-12  col-md-4 align-center">
            <p
              className=" "
              style={{letterSpacing: '8px', fontFamily: 'Monoton', color: 'snow'}}
            >
              {' '}
             Hello <span className="pink2">!</span>
            </p>
            <p className="abouttext">
              I'm{' '} <span className="pink2" >kumenger beyene</span> {' '}
              <span >
                 a fullstack Web Developer{' '}
              </span>{' '}
              from{' '}
              <a
                href="https://en.wikipedia.org/wiki/Ethiopia"
                target="_blank"
                className="link" rel="noreferrer"
              >
                Ethiopia,
              </a>{' '}

              one of the lucky ones to won the{' '}
              <a
                href="https://en.wikipedia.org/wiki/Diversity_Immigrant_Visa"
                target="_black"
                className="link"
              >
                Diversity visa lottery
              </a>{' '}
              that gives you the opportunity to{' '}
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

    </div>
  );
};
export default About;
