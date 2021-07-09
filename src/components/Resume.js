import React from 'react'
import react from '../assets/icons/react.svg'
import python from '../assets/icons/python.svg'
import js from '../assets/icons/js.svg'
import javascript from '../assets/icons/java-script.svg'

import Bar from './Bar'
import {motion} from 'framer-motion'

export default function Resume() {

    const languages = [
        {
            icon: python,
            name: 'Python',
            level: '90'
        },
        {
            icon: react,
            name: 'MySql',
            level: '80'
        },
        {
            icon: javascript,
            name: 'java-Script',
            level: '90'
        },
        {
            icon: js,
            name: 'Java',
            level: '70'
        },

        
       
        {
            icon: react,
            name: 'Bootstrap',
            level: '80'
        }
    ]
    
    const tools = [
        {
            icon: react,
            name: 'OpenCv',
            level: '85'
        },
        {
            icon: react,
            name: 'Spring-Boot',
            level: '80'
        },
        {
            icon: react,
            name: 'NodeJs',
            level: '90'
        },
        {
            icon: react,
            name: 'Android',
            level: '60'
        },
        {
            icon: react,
            name: 'reactJs',
            level: '70'
        },
    
    ]
    

    const resume__veriant = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                dealy:0.2, duration:0.6
            }
        },
        exit:{
            opacity:0,
            transition:{
                ease:'easeInOut'
            }
        }

    }


    return (
        <motion.div className="container resume"

                variants={resume__veriant}
                initial='hidden'
                animate='visible'
                exit='exit'
    
        >
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Computer Science Enginnering
                        </h5>
                        <p className="resume-card__name">
                        Gandhi Institute of Engineering and Technology, Gunpur(2015-2019)
                        </p>
                        <p className="resume-card__details">I am currently working at MISBOI Consultancy as system designer and team lead software developer</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Full-Stack Developer
                        </h5>
                        <p className="resume-card__name">
                            Drubus Technologies Pvt Ltd
                        </p>
                        <p className="resume-card__details">I worked as a Full-Stack Developer at Drubus</p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Senior Software Developer & Team Lead
                        </h5>
                        <p className="resume-card__name">
                            Misboi Consulting Services
                        </p>
                        <p className="resume-card__details">I work as a Senior Software Developer in Misboi Consulting Services and also completed some projects</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Language 
                    </h5>
                    <div className="mt-3 resume-language__body">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                             Framework
                    </h5>
                    <div className="mt-3 resume-language__body">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
