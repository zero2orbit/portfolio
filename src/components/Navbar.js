import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

export default function Navbar() {
    const [active, setActive] = useState('')
    useEffect(() => {

        let currentURL = window.location.href
        if (currentURL.endsWith('/about'))
            setActive('About');
        else if (currentURL.endsWith('/projects'))
            setActive('Projects')
        else if (currentURL.endsWith('/'))
            setActive('Resume')

    },[active])


    const navbar_varient = {
        hidden: {
            y: '-30vh',
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition:{
                dealy:0.2, duration:0.7, type:'spring'
            }
        },
    }


    return (
        <motion.div className="navbar"
        
            variants={navbar_varient}
            initial='hidden'
            animate='visible'
        
        >
            <div className="navbar__active">
                {active}
            </div>

            <div className="navbar__items">
                
                {active !== 'Resume' ? <Link to="/"><div className="navbar__item" onClick={() => setActive('Resume')}>Resume</div> </Link>: null}

                {active !== 'About' && <Link to="/about"><div className="navbar__item" onClick={() => setActive('About')}>About</div> </Link>}

                {active !== 'Projects' && <Link to="/projects"> <div className="navbar__item" onClick={() => setActive('Projects')}>Projects</div></Link>}
            </div>

        </motion.div>
    )
}
