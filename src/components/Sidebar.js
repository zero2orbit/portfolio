import React from 'react'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mee from '../assets/me.jpeg'

import resume from '../assets/Resume(Badal).pdf'
import Typed from 'react-typed'
import {motion} from 'framer-motion'


export default function Sidebar() {
    const handleEmailMe = () => {
        window.open("mailto:zero2orbit@gmail.com")
    }


    const sidebar__veriant = {
        hidden:{
            x: '-20vw',
        },
        visible:{
            x: 0,
            transition:{
                dealy:0.1, duration:0.5, type:'spring'
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
        <motion.div className="sidebar"
             
            variants={sidebar__veriant}
            initial='hidden'
            animate='visible'
            exit='exit'
        
        >
             <motion.img src={mee} alt="avatar" className="sidebar__avatar" 

                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
             
             />



             <div className="sidebar__name">Badal Kumar <span>Behera</span> </div>
             <div className="sidebar__item sidebar__title">
                 <Typed 
                    strings={["Node js", 'Python', 'Spring Boot', 'React js', 'MERN', 'OpenCv', 'Postgres', 'MongoDB', 'Apis', 'Git', 'React Native']}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                 />
             </div>
            <a  href={resume} download="resume(badal).pdf">
                <div className="sidebar__item sidebar__title blink-soft">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download CV
                </div> 
            </a>

            {/* <figure className="sidebar__social-icons">
                <a href="!#"><img src={facebook} alt="facebook" className="mr-3 sidebar__icon" /></a>
                <a href="!#"><img src={instagram} alt="instagram" className="sidebar__icon" /></a>
            </figure> */}

            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/zero2orbit"><img src={github} alt="github" className="mr-3 sidebar__icon" />github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="mr-3 sidebar__icon " />
                    Bhubaneswar, Odisha
                </div>
                <div className="sidebar__item sidebar__name">zero2orbit@gmail.com</div>
                <div className="sidebar__item">7008050109  7504150883(wtsApp)</div>
            </div>
            
            <div className="sidebar__item sidebar__email sidebar__name"  onClick={handleEmailMe}>Email me</div>
        </motion.div>
    )
}
