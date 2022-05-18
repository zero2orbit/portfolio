import React from 'react'
import api from '../assets/icons/api.svg'
import backend from '../assets/icons/backend.svg'
import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'
import Skillcard from './Skillcard'
import {motion} from 'framer-motion'

export default function About() {

    const skills = [
        {
            icon: computer,
            title: "Frontend Development",
            about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
        },
        {
            icon: backend,
            title: "Backend  Development",
            about: "handle database(MySql, MongoDB), server, and api",
        },
        {
            icon: api,
            title: "API Development",
            about: "I can develop robust REST API using Spring Boot and Node js "
        },
        {
            icon: algo,
            title: "Competitive Coder",
            about: "a daily problem solver in HackerRank and Leetcode"
        },
    ]

    const about__veriant = {
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
        <motion.div  className="about"
            variants={about__veriant}
            initial='hidden'
            animate='visible'
            exit='exit'

        >
            <h6 className="about__intro">
                I describe myself as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions.
            </h6>
            
            <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>


        </motion.div>
    )
}
