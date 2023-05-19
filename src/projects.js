import VideoComponet from './videoComponent'
import React from "react"
let projectCollection = [
    {
        videoSrc: "https://www.youtube.com/embed/3iEjAY9zI_E",
        projectName: "FullStack Discussion forum (MERN)",
        deployedUrl: "https://kumequitsmoking.herokuapp.com/",
        sourceCode: "https://github.com/kumenger/quit-smoking--forum"
    },
    {
        videoSrc: "https://www.youtube.com/embed/RmSEo2XIpNM",
        projectName: "Human resource management (HRM)",
        deployedUrl: "https://github.com/kumenger/employe-tracker",
        sourceCode: "https://github.com/kumenger/employe-tracker"
    },
    {
        videoSrc: "https://www.youtube.com/embed/8eGOKFtx13U",
        projectName: "JavaScript Quiz",
        deployedUrl: "https://kumenger.github.io/coding-quiz-challenge/",
        sourceCode: "https://github.com/kumenger/coding-quiz-challenge"
    },
    {
        videoSrc: "https://www.youtube.com/embed/DQZyZBHORFs",
        projectName: "Logo Generator",
        deployedUrl: "https://github.com/kumenger/logo-creater",
        sourceCode: "https://github.com/kumenger/logo-creater"
    }, {
        videoSrc: "https://www.youtube.com/embed/u8-RcGNyWOA",
        projectName: "RESTful API Implementation",
        deployedUrl: "https://damp-refuge-92088.herokuapp.com/",
        sourceCode: "https://github.com/kumenger/api-collection"
    }, {

        videoSrc: "https://www.youtube.com/embed/h3hftRDdBKc",
        projectName: "FullStack Image AI",
        deployedUrl: "https://kumesimage.herokuapp.com/",
        sourceCode: "https://github.com/Nmargolis00/image-AI"
    }, {

        videoSrc: "https://www.youtube.com/embed/OQ0eAUbPbHc",
        projectName: "The Weather DashBoard",
        deployedUrl: "https://kumenger.github.io/weather-application/",
        sourceCode: "https://github.com/kumenger/weather-application"
    }
]
const Projects = () => {

    return (
        <div >
            <VideoComponet projectDetails={projectCollection}/>
        </div>

    )
}
export default Projects
