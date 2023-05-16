import Project from './projects';
import Header from './header';
import About from './about';
import Skills from './skils';
import React from 'react';
import Contact from './Contact';
import Resume from './resume';

import Footer from './footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


const App = () => {
    return (
        <>
            <Router>
                <Header/>
<div className='container-fluid' style={{paddingBottom:"100px"}}>
                <Routes>
                    <Route path="/"
                        element={<About/>}/>
                    <Route path="/projects"
                        element={<Project/>}/>
                    <Route path="/skills"
                        element={<Skills/>}/>
                    <Route path="/contact"
                        element={<Contact/>}/>
                    <Route path="/resume"
                        element={<Resume/>}/>
                   
                </Routes></div>
                <Footer/>
            </Router>

        </>
    );
};

export default App;
