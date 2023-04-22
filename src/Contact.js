import React from "react";
import { ListGroup } from "react-bootstrap";
const Contact = () => {
  return (
    <div className="row">
      <div className="col-12">
        <ListGroup>
          <ListGroup.Item>
           <h4> <a
              href="https://www.linkedin.com/in/kumenger-beyene-3031a515b/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://i.ibb.co/tQF6ftS/kisspng-linkedin-logo-clip-art-linkedin-icons-no-attribution-5ab176800cdbb1-9763056415215796480527.png"
                id="fcc"
                height="32px"
              />{" "}
         linkedin profile   
            </a></h4>  
          </ListGroup.Item>
          <ListGroup.Item>
           <h4> <a
              href="https://www.freecodecamp.org/kumengerbeyene"
              target="_blank"
              rel="noreferrer"
            >
            
              <img
                src="https://i.ibb.co/sKjYKGL/free-Code-Camp-alternative.png"
                id="fcc"
                width="227px"
                height="32px"
              />{" "}
           FreeCodeCamp profile   
            </a></h4>
          </ListGroup.Item>
          <ListGroup.Item>
           <h4> <a
              href="https://www.codeproject.com/Members/kumeneger"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://i.ibb.co/dMqZ5q3/codeproject.png"
                width="32px"
                height="32px"
                id="code"
              />{" "}
            Code Project profile    
            </a></h4> 
          </ListGroup.Item>
          <ListGroup.Item>
          <h4> <a href=" https://github.com/kumenger" target="_blank">
              <img
                src="https://i.ibb.co/zVTmHht/Git-Hub-Mark.png"
                alt="Git-Hub-Mark"
                width="32px"
                height="32px"
                id="github"
              />{" "}
             Github profile  
            </a></h4> 
          </ListGroup.Item>
          <ListGroup.Item>
            <h4 className="">
            <img src="https://img.icons8.com/color/48/null/gmail--v1.png"/>{" "}
            <a href="mailto:kumeprog@gmail.com">Send Email</a>
            </h4>
          </ListGroup.Item>
          <ListGroup.Item>
            <h4 className=" ">
              <img src="https://img.icons8.com/color/20/000000/skype--v1.png" />{" "}
              <a href="skype:-live:kumeprog-?chat">Start chat</a>
           
            </h4>
          </ListGroup.Item>
         
        </ListGroup>
      </div>
    </div>
  );
};
export default Contact;
