import React from "react";
import { ListGroup } from "react-bootstrap";
const Award = () => {
  return (
    <div className="row container-fluid ">
      <div className="col-12">
        <ListGroup className=" ">
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
export default Award;
