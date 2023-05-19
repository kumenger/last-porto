import React from 'react';
import { ListGroup } from "react-bootstrap";
const Resume = () => {
  return ( 
    <div style={{color: "rgb(204, 194, 233)"}} className='container-fluid row abouttext '> 
    <div className='col-xs-12 col-s-12 offset-md-1 col-md-5 ' > <h1>KUMENGER BEYENE</h1>
     <h2>DENVER, CO | KUMEDEVE@GMAIL.COM </h2>
     
    
        <ul>
        Over 3+ years of professional exposure in JavaScript technology such as React JS , MongoDB, ORM,MVC,Mysql,Express.js, Node JS and third-party and server-side API.
        </ul>
        <ul>        
        Expertise in developing web pages using HTML5, CSS3, SEMANTIC UI, SASS, AXIOS, Object Oriented Java script, ES6, AJAX, JSON, XML.
        </ul>
        <ul>
        Extensive use of Node environment using Npm, and MongoDB along with Mongoose.JS to 
        </ul>
        <ul>
        Strong experience in building ecommerce applications using the JavaScript MERN Stack using Redux, Redux-form, Babel+ES6, EXT JS and Web - Pack for Single Page Application development.
        </ul>
        <ul>
        Professional experience in Information Technology with extensive experience in application development using back-end technologies.
        </ul>
      <h3> Updated Resume? <a style={{color:'gold'}} href='https://docs.google.com/document/d/1cl7DyT_hCOoKqk6-ePuOEFQXXRywGwTg/edit?usp=sharing&ouid=102113305559518995439&rtpof=true&sd=true' target='_blank'>Here</a></h3>
     </div>
      <div className="col-xs-12 col-s-12  col-md-6 ">
      <h3 className='text-center' style={{color:'gold'}}>Credentials</h3>
        <ListGroup style={{backgroundColor:"red"}}>
          <ListGroup.Item>
            <a
              href="https://www.linkedin.com/in/kumenger-beyene-3031a515b/"
              target="_blank"
              rel="noreferrer"
            >
            <h5 className="about"> Universtity Of Denver</h5>
            </a>
          </ListGroup.Item>
         
          <ListGroup.Item>
            <a
              href="https://drive.google.com/file/d/1K2XVPE-MJ2axS7vbmWsleLowv3tJ0TCf/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
           <h5 className="about">Univertsy of Helsiniki</h5>  
            </a>
          </ListGroup.Item>
        
          <ListGroup.Item>
          <a href="https://www.udemy.com/certificate/UC-8a95409b-7d4d-4d8b-a6dc-8332f733dd33/" target="_blank">
      <h5 className="about">Modern React with Readux (udemy)</h5>
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
          <a href="   https://www.freecodecamp.org/certification/kumengerbeyene/responsive-web-design" target="_blank">
       <h5 className="about"> Responsive web design (freeCodeCamp)</h5>  
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
          <a href=" https://www.freecodecamp.org/certification/kumengerbeyene/javascript-algorithms-and-data-structures" target="_blank">
   <h5 className="about">Data Structure and algorithms(freeCodeCamp)</h5> 
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
          <a href="  https://www.freecodecamp.org/certification/kumengerbeyene/front-end-development-libraries" target="_blank">
 <h5 className="about">Front End Development(freeCodeCamp)</h5> 
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a
              href="https://drive.google.com/file/d/1B24pyx9kHwcJrTtUMeFwjluVHMh8RXpH/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
           <h5 className="about">Arba Minch Universty</h5>  
            </a>
          </ListGroup.Item>
        
         
        </ListGroup>
      </div>
  </div>
  );
};
export default Resume;