import SkillsComponent from './SkillsCOmponent';
import React from 'react'
const Skills = () => {
    return (
        <div className="row aboutme ">


            <SkillsComponent title={'FrontEnd'}
                skills={
                    [

                        {
                            src: 'https://img.icons8.com/color/48/000000/react-native.png',
                            skilltype: 'React'
                        },
                        {
                            src: 'https://img.icons8.com/ios-filled/50/000000/javascript-logo.png',
                            skilltype: 'javascript'
                        },
                        {
                            src: 'https://img.icons8.com/color/48/000000/bootstrap.png',
                            skilltype: 'boostrap'
                        },
                        {
                            src: 'https://img.icons8.com/color/48/000000/redux.png',
                            skilltype: 'Redux'
                        }, {
                            src: 'https://img.icons8.com/ios-filled/50/null/jquery.png',
                            skilltype: 'jquery'
                        }, {
                            src: 'https://img.icons8.com/ios/50/null/css.png',
                            skilltype: 'css'
                        }, {
                            src: 'https://img.icons8.com/color/48/null/material-ui.png',
                            skilltype: 'MUI'
                        },
                        {
                       src:"https://img.icons8.com/color/48/sass.png",
                       skilltype:"SASS"
                        }


                    ]

                }/>


            <SkillsComponent title={'BackEnd'}
                skills={
                    [
                        {
                            src: 'https://img.icons8.com/color/48/000000/nodejs.png',
                            skilltype: 'Node'
                        },

                        {
                            src: 'https://img.icons8.com/color/48/null/mongoose.png',
                            skilltype: 'mongoose'
                        },
                        {
                            src: 'https://img.icons8.com/color/48/000000/graphql.png',
                            skilltype: 'Grapgiql'
                        },

                        {
                            src: 'https://img.icons8.com/nolan/64/express-js.png',
                            skilltype: 'Express.js'
                        }, {
                            src: 'https://img.icons8.com/ios/50/null/api-settings.png',
                            skilltype: 'API'
                        },{
                            src:"https://img.icons8.com/color/48/apollo.png",
                            skilltype:"Apollo Server"
                        }


                    ]
                }/>{"  "}
            <SkillsComponent title={'DataBase, Integration and Deployment'}
                skills={
                    [
                        {
                            src: 'https://img.icons8.com/ios-filled/50/null/mysql.png',
                            skilltype: 'Mysql'
                        },
                        {
                            src: 'https://img.icons8.com/color/48/000000/mongodb.png',
                            skilltype: 'MongoDb'
                        },
                        {
                            src: 'https://img.icons8.com/color/48/000000/json--v1.png',
                            skilltype: 'Json'
                        },
                        {
                            src: 'https://img.icons8.com/color/48/000000/git.png',
                            skilltype: 'Git'
                        }, {
                            src: 'https://img.icons8.com/color/48/000000/amazon-web-services.png',
                            skilltype: 'AWS'
                        }, {
                            src: 'https://img.icons8.com/ios-filled/50/null/github.png',
                            skilltype: 'GitHub'
                        }, {
                            src: 'https://img.icons8.com/color/48/null/heroku.png',
                            skilltype: 'Heroku'
                        },{
                            src:"https://img.icons8.com/color/48/gitlab.png",
                            skilltype:"GitLab"
                        }

                    ]
                }/>


            <a className='text-center' style={
                    {color: 'gold'}
                }
                href='https://icons8.com/'
                target="_black">Thanks to Icons'8
            </a>

        </div>
    );
};
export default Skills;
