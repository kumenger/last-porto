import {Card, Figure} from 'react-bootstrap';
import React from 'react'
const SkillsComponent = ({title, skills}) => {
  return (<div >
    <Card >
      <Card.Body>
        <Card.Title>
          <h2>{title}</h2>
        </Card.Title>
        <Card.Text>
          {skills.map((skill) => (
            <Figure>
              <Figure.Image src={skill.src}/>
              <Figure.Caption >{skill.skilltype}</Figure.Caption>
           <p style={{visibility:'hidden'}}> kumeprog</p>
            </Figure>
               
          ))}
        </Card.Text>
 
      </Card.Body>
   
    </Card>

    </div>
  );
};
export default SkillsComponent;
