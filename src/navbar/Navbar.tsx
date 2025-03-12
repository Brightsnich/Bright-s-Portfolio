"use client"
import React from 'react';
import style from "./navbar.module.css";
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMediumScreen, setIsMediumScreen] = useState(false); // New state

    useEffect(() => {
        const handleResize = () => {
            setIsMediumScreen(window.innerWidth <= 1024); // Example breakpoint
        };

        window.addEventListener('resize', handleResize); // Add resize listener
        handleResize(); // Initial check on mount

        return () => {
            window.removeEventListener('resize', handleResize); // Remove listener
        };
    }, []);

    const handleClick = () => {
        if (isMediumScreen) {  // Only toggle on medium screens
            setIsMenuOpen(!isMenuOpen);
        }
    };


    return (
        <nav className={style.nav}>
            <div className={style.navBrand}>
                <h1>My portfolio</h1>
            </div>
            <div onClick={handleClick} className={style.menuButton}>
                <button className={style.menu}></button>
            </div>
            <ul className={style.menuList} style={{display: isMediumScreen ? (isMenuOpen ? 'flex' : 'none') : 'flex'}}>
                <a href='#home' className={style.navItem}> home </a>
                <a href='#technologies' className={style.navItem}> technologies </a>
                <a href='#projects' className={style.navItem}>my works </a>
                <a href='#footer' className={style.navItem}> contact me </a>
                <a href='https://drive.google.com/drive/folders/1-Qqspf01-zHTZU0yYqhNa_t9IsxIFZ13' className={`${style.resume} ${style.navItem}`}> Resume </a>
            </ul>
        </nav>
    )
}
