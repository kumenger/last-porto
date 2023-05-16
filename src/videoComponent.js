import {Card, Button} from "react-bootstrap"
const VideoComponet = ({projectDetails}) => { // videoSrc,projectName,deployedUrl,sourceCode
    return (
        <div className="container-fluid" >
            <br></br>
        <div className="row ">
           
                { 
                projectDetails.map((project) => (<div className="col-xs-12 col-s-6 col-md-6 col-l-4 col-xl-4 ">
                    <Card style={
                            {
                                width: "340px",
                                height: "300px",border:"1px solid black"
                            }
                        }
                        className=" ">
                        <iframe width="100%" height="100%"
                            src={
                                project.videoSrc
                            }
                            title="YouTube video player"
                            frameBorder="10"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen="true" ></iframe>
                        <Card.Body>
                            <Card.Title style={{color:"navy"}}>
                                {
                                project.projectName
                            } </Card.Title>
                            <Button style={{background:"navy"}}  target="_black"
                                href={
                                    project.deployedUrl
                            }>
                                View Online
                            </Button>
                            {" "}
                            <Button style={{background:"navy"}} target="_black"
                                href={
                                    project.sourceCode
                            }>
                                View Source Code
                            </Button>
                        </Card.Body>
                    </Card>
                    <br></br>
              </div>  ))
           } 
           
        </div>
     
        </div>
    )
}
export default VideoComponet
