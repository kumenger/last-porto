import React from "react";
import { ListGroup } from "react-bootstrap";
const Contact = () => {
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
              <img
                src="https://i.ibb.co/tQF6ftS/kisspng-linkedin-logo-clip-art-linkedin-icons-no-attribution-5ab176800cdbb1-9763056415215796480527.png"
                id="fcc"
                height="32px"
              />
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a
              href="https://www.freecodecamp.org/kumengerbeyene"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://i.ibb.co/sKjYKGL/free-Code-Camp-alternative.png"
                id="fcc"
                width="227px"
                height="32px"
              />
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a
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
              />
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href=" https://github.com/kumenger" target="_blank">
              <img
                src="https://i.ibb.co/zVTmHht/Git-Hub-Mark.png"
                alt="Git-Hub-Mark"
                width="32px"
                height="32px"
                id="github"
              />
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <p className="">
              <img src="https://img.icons8.com/color/20/000000/gmail-new.png" />{" "}
              Kumeprog@gmail.com
            </p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p className=" ">
              <img src="https://img.icons8.com/color/20/000000/skype--v1.png" />{" "}
              live:kumeprog
            </p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p className="">
              <img src="https://img.icons8.com/color/20/000000/ms-outlook.png" />
              mekumanfekeman@outlook.com
            </p>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};
export default Contact;
