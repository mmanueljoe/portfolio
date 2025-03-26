import React from 'react';
import { ThemeContext } from '../ThemeContext';
import { useContext } from 'react';
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import './ThemeToogle.css';

const ThemeToogle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
           <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? <IoSunnyOutline className='icon' /> : <IoMoonOutline className='icon' />}
        </button>
        </>
    )
}

export default ThemeToogle