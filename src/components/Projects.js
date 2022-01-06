import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import data_projects from './Data/Project_data'
import {motion} from 'framer-motion'

export default function Projects() {
    const [projects, setProjects] = useState(data_projects)

    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
    }

    const project__veriant = {
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
        <motion.div className="container projects"
        
                variants={project__veriant}
                initial='hidden'
                animate='visible'
                exit='exit'
                
        >
            <div className="projects__navbar">
                <div className="sidebar__name" onClick={() => setProjects(data_projects)}>All</div>
                <div className="sidebar__name" onClick={() => handleFilterCategory('mern')}>MERN</div>
                <div className="sidebar__name" onClick={() => handleFilterCategory('nodejs')}>Node Js</div>
                <div className="sidebar__name" onClick={() => handleFilterCategory('springboot')}>Spring Boot</div>
                <div className="sidebar__name" onClick={() => handleFilterCategory('opencv')}>OpenCv</div>
                <div className="sidebar__name" onClick={() => handleFilterCategory('api')}>Apis</div>
            </div>
            <div className="row">

                {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />)
                }
            </div>
        </motion.div>
    )
}
