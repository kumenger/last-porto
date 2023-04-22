import React from "react";
import { ListGroup } from "react-bootstrap";
const Award = () => {
  return (
    <div className="row">
      <div className="col-12">
        <ListGroup>
          <ListGroup.Item>
            <a
              href="https://www.linkedin.com/in/kumenger-beyene-3031a515b/"
              target="_blank"
              rel="noreferrer"
            >
             Universtity Of Denver
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a
              href="https://drive.google.com/file/d/1B24pyx9kHwcJrTtUMeFwjluVHMh8RXpH/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
             Arba Minch Universty
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a
              href="https://drive.google.com/file/d/1K2XVPE-MJ2axS7vbmWsleLowv3tJ0TCf/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
             Univertsy of Helsiniki
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://www.freecodecamp.org/kumengerbeyene" target="_blank">
            FreeCodeCamp
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
          <a href="https://www.udemy.com/certificate/UC-8a95409b-7d4d-4d8b-a6dc-8332f733dd33/" target="_blank">
      Udemy
            </a>
          </ListGroup.Item>
         
         
        </ListGroup>
      </div>
    </div>
  );
};
export default Award;
