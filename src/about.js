import React from 'react';
const About = () => {
  return (
    <div className="">

      <div className=" a  ">
        <div className="row">
          <div className=" text-center">
            {' '}

          </div>
          <br></br><br></br>
        </div>
        <div className="row  aboutholder  ">
          <div className="col-xs-12 col-s-12 offset-md-2 col-md-3 bounce-1  d-flex justify-content-center">
            <img
              src="https://i.ibb.co/9tGLc6C/My-project-5-modified.png"
              style={{width: '80%', height: '', objectFit: 'contain'}}
            />
          </div>
          <div className="  col-xs-12   col-s-12  col-md-4  heading-sun ">
            <p
              className=" "
              style={{letterSpacing: '8px', fontFamily: 'Monoton', color: 'snow'}}
            >
              {' '}
             Hello <span className="pink">!</span>
            </p>
            <p className=" abouttext">
              I'm{' '} <span className="pink" >kumenger beyene</span> {' '}
              <span >
                 a fullstack Web,Mobile Developer{' '}
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
              <span className="pink">Permanent Resident Card</span>.
               Graduated in Computer Science and Information
              Techonolgy,<strong className="pink">Bsc</strong> at{' '}
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
