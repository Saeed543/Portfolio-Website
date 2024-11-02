'use client'

import React from 'react'
import { useState } from 'react'
import styles from './Navbubble.module.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbubble = () => {
    const [isClicked, toggleIsClicked] = useState(false);

    const handleClick = () => toggleIsClicked(!isClicked);

    {
        return (
            <div className={styles.Navbubble}>
                <motion.button
                    onClick={handleClick}
                    className={styles.NavbubbleButton}
                    animate={{ rotate: isClicked ? 360 : 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                    <svg width="40.000000" height="33.000000" viewBox="0 0 80 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="clip3_19">
                                <rect id="Frame 4" rx="36.000000" width="72.000000" height="79.000000" transform="translate(0.500000 73.500000) rotate(-90.000000)" fill="white" fillOpacity="0" />
                            </clipPath>
                        </defs>
                        <rect id="Frame 4" rx="36.000000" width="72.000000" height="79.000000" transform="translate(0.500000 73.500000) rotate(-90.000000)" fill="#FFFFFF" fillOpacity="1.000000" />
                        <g clipPath="url(#clip3_19)">
                            <motion.rect id="Rectangle 3" x="10.000000" y="52.000000" rx="5.500000" width="60.000000" height="8.000000" fill="#000000" fillOpacity="1.000000" />
                            <motion.rect id="Rectangle 2" x="10.000000" y="31.000000" rx="5.500000" width="60.000000" height="8.000000" fill="#000000" fillOpacity="1.000000" />
                            <motion.rect id="Rectangle 1" x="10.000000" y="10.000000" rx="5.500000" width="60.000000" height="8.000000" fill="#000000" fillOpacity="1.000000" />
                        </g>
                    </svg>

                </motion.button>

                {isClicked && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.NavWindow}
                    >
                        <ul className={styles.NavWindowUl}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Services">Services</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </motion.div>
                )}
            </div>
        )
    }
}
export default Navbubble