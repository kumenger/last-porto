import React, {useState} from "react";
import {Badge, Button, ListGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const Contact = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const handleMessageSent = () => {
        if (name === '' || message === '' || email === '') {
            setError('Please provide name,email and your message!')
            setInterval(() => {
                setError("")
            }, 5000);
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
            setError('invalid email format')
            setInterval(() => {
                setError('')
            }, 5000);

        } else {
            setError(`Thank you ${name} i have recived you email and  will get back to you ASP! `)
            setInterval(() => {
                setError('')
                setName('')
                setEmail('')
            }, 6000);
        }
    }
    return (
        <div className="container row  " style={{color:"navy"}}>
            <div className="offset-md-2 col-xs-12 col-s-12 col-md-5 col-l-12 text-center">
                <h3 className="text-center ">Send me Email</h3>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="your name"
                            value={name}
                            onChange={
                                (e) => setName(e.target.value)
                            }/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com"
                            value={email}
                            onChange={
                                (e) => setEmail(e.target.value)
                            }/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea"
                            rows={5}
                            value={message}
                            onChange={
                                (e) => setMessage(e.target.value)
                            }/>
                    </Form.Group>
                    <br></br>
                    <Form.Label className="text-white text-center">
                        {error}</Form.Label>
                    <Form.Group>
                        <Button onClick={handleMessageSent} style={{background:"navy"}} className="form-control">Send Email</Button>
                    </Form.Group>
                </Form>
            </div>
            <div className="offset-md-1 col-xs-12 col-s-12 col-md-4 col-l-6">
                <h3 className="text-center" >Professional Links</h3>
                <ListGroup>
                    <ListGroup.Item>
                        <h5>
                            <a href="https://www.linkedin.com/in/kumenger-beyene-3031a515b/" target="_blank" rel="noreferrer">
                                <img src="https://i.ibb.co/tQF6ftS/kisspng-linkedin-logo-clip-art-linkedin-icons-no-attribution-5ab176800cdbb1-9763056415215796480527.png" id="fcc" height="32px"/>{" "}
                                <Badge bg="secondary">linkedin profile
                                </Badge>
                            </a>
                        </h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h5>
                            <a href="https://www.freecodecamp.org/kumengerbeyene" target="_blank" rel="noreferrer">

                                <img src="https://i.ibb.co/sKjYKGL/free-Code-Camp-alternative.png" id="fcc" width="137px" height="22px"/>{" "}
                                <Badge bg="secondary">
                                    FreeCodeCamp profile
                                </Badge>
                            </a>
                        </h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h5>
                            <a href="https://www.codeproject.com/Members/kumeneger" target="_blank" rel="noreferrer">
                                {" "}
                                <img src="https://i.ibb.co/dMqZ5q3/codeproject.png" width="32px" height="32px" id="code"/>{" "}
                                <Badge bg="secondary">
                                    Code Project profile
                                </Badge>
                            </a>
                        </h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h5>
                            <a href=" https://github.com/kumenger" target="_blank">
                                <img src="https://i.ibb.co/zVTmHht/Git-Hub-Mark.png" alt="Git-Hub-Mark" width="32px" height="32px" id="github"/>{" "}
                                <Badge bg="secondary">Github profile
                                </Badge>
                            </a>
                        </h5>

                    </ListGroup.Item>


                </ListGroup>
            </div>
          
        </div>
    );
};
export default Contact;
