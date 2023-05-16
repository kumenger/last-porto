import React from "react";
import { Badge, Button, ListGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
const Contact = () => {
  return (
    <div className="row text-info">
      <div className="col-xs-12 col-s-12 col-m-6 col-l-6">
        <h3 className="text-center text-info">Professional Links</h3>
        <ListGroup>
          <ListGroup.Item>
           <h5> <a
              href="https://www.linkedin.com/in/kumenger-beyene-3031a515b/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://i.ibb.co/tQF6ftS/kisspng-linkedin-logo-clip-art-linkedin-icons-no-attribution-5ab176800cdbb1-9763056415215796480527.png"
                id="fcc"
                height="32px"
              />{" "}
       <Badge bg="secondary">linkedin profile   </Badge>  
            </a></h5>  
          </ListGroup.Item>
          <ListGroup.Item>
           <h5> <a
              href="https://www.freecodecamp.org/kumengerbeyene"
              target="_blank"
              rel="noreferrer"
            >
            
              <img
                src="https://i.ibb.co/sKjYKGL/free-Code-Camp-alternative.png"
                id="fcc"
                width="137px"
                height="22px"
              />{" "}
        <Badge bg="secondary"> FreeCodeCamp profile </Badge>    
            </a></h5>
          </ListGroup.Item>
          <ListGroup.Item>
           <h5> <a
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
         <Badge bg="secondary"> Code Project profile   </Badge>   
            </a></h5> 
          </ListGroup.Item>
          <ListGroup.Item>
          <h5> <a href=" https://github.com/kumenger" target="_blank">
              <img
                src="https://i.ibb.co/zVTmHht/Git-Hub-Mark.png"
                alt="Git-Hub-Mark"
                width="32px"
                height="32px"
                id="github"
              />{" "}
             <Badge bg="secondary">Github profile  </Badge>
            </a></h5> 
           
          </ListGroup.Item>
          
         
        </ListGroup>
      </div>
      <div className="col-xs-12 col-s-12 col-m-6 col-l-6">
      <h3 className="text-center text-info">Send me Message</h3>
      <Form>
      <Form.Group  controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control  placeholder="your name" />
      </Form.Group>
      <Form.Group  controlId="exampleForm.ControlInput2">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group  controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <br></br>
      <Form.Group>
        <Button>Send Message</Button>
      </Form.Group>
    </Form>
      </div>
    </div>
  );
};
export default Contact;
