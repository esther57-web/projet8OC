import darkBar from './../assets/dark/bars-white.svg'
import lightBar from './../assets/light/bars.svg'
import darkMoon from './../assets/dark/moon-regular.svg'
import lightMoon from './../assets/light/moon-regular.svg'
import darkSun from './../assets/dark/sun-regular.svg'
import lightSun from './../assets/light/sun-regular.svg'
import { useTheme } from './../context/context.jsx'
import { useState } from 'react'
import darkCross from './../assets/dark/xmark.svg'
import lightCross from './../assets/light/xmark.svg'
import navCategories from '../data/data.js'
import cv from './../assets/cv-esther.pdf'
import { Link } from 'react-scroll'

const Navbar = () => {
    
    let [isNavbarVisible, setIsNavbarVisible] = useState(false)
    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible)
    }

    const handleClick = (event) => {
        event.stopPropagation(); 
    };
    
    const { theme, toggleTheme } = useTheme();

  return (
    <header className={`flex z-50 fixed top-0 items-center xs:px-2 xs:py-2 w-full lg:justify-between sm:justify-normal sm:py-0 sm:px-6 lg:px-12 ${theme === "dark"? "dark border-b-[1px]  border-cyan-900" : "light shadow-md"}`}> 
        <h2 className='xs:text-lg font-silkscreen md:text-4xl'>EO</h2>
        <div className="flex xs:flex-row-reverse xs:w-full items-center relative sm:flex-row sm:justify-center md:justify-end"> 
            <div className={`flex md:mr-16 sm:relative`}>
                <div onClick={toggleNavbar} className={` ${isNavbarVisible ? 'xs:bg-black/30 xs:fixed xs:inset-0 xs:h-full xs:w-full sm:bg-transparent sm:static sm:h-auto sm:w-auto sm:inset-auto' : ''}`}>
                <nav onClick={handleClick} className={`${isNavbarVisible ? "xs:z-100 xs:pt-6 xs:block xs:absolute xs:left-1/2 xs:top-0 w-full xs:transform -translate-x-1/2 xs:py-2 xs:border-b xs:border-cyan-900 sm:py-0 sm:border-none" : "xs:hidden"} ${theme === "dark" ? "dark" : "light"} sm:flex w-full sm:relative sm:top-auto`}>
                    <img src={theme === "dark" ? darkCross : lightCross} onClick={toggleNavbar} className='flex ml-auto mr-4 cursor-pointer sm:hidden' alt='fermer le menu'></img>
                    {navCategories.map((nav, index) => (
                        (nav.link !== 'mon-cv' ? <Link key={index} to={nav.link} smooth={true} duration={500} spy={true} activeClass={`${theme === 'dark'? 'sm:bg-dark-active-link' : 'sm:bg-light-active-link'}`} className={`${theme === "dark" ? "sm:hover:bg-dark-blue-pp" : "sm:hover:bg-black sm:hover:text-white"} flex xs:leading-relaxed xs:hover:underline sm:hover:no-underline sm:py-5 lg:py-6 sm:px-2 lg:px-4 justify-center items-center cursor-pointer transition duration-300 xs:text-xs md:uppercase lg:text-[14px]`}>{nav.name}</Link>
                             : <a key={index} href={cv} target='_blank' className={`${theme === "dark" ? "sm:hover:bg-dark-blue-pp" : "sm:hover:bg-black sm:hover:text-white"} flex xs:leading-relaxed xs:hover:underline sm:hover:no-underline sm:py-5 lg:py-6 sm:px-2 lg:px-4 justify-center items-center cursor-pointer transition duration-300 xs:text-xs md:uppercase lg:text-[14px]`}>{nav.name}</a>)
                    ))}
                </nav>
                </div>
                <img src={theme === "dark" ? darkBar : lightBar} onClick={toggleNavbar} className='cursor-pointer sm:hidden' alt="dérouler le menu de navigation"></img>
            </div>
            <div className='flex xs:absolute xs:left-1/2 xs:transform xs:-translate-x-1/2 sm:right-0 sm:left-auto sm:transform-none lg:relative'>     
                <img className='xs:w-2 lg:w-4' src={theme === "dark" ? darkMoon : lightMoon} alt='icône lune'></img>
                <label htmlFor="check" className={`${theme === 'dark' ? 'bg-pink' : 'bg-black'} mx-1 flex rounded-full xs:w-8 xs:h-4  relative lg:w-16 lg:h-8 cursor-pointer`}>
                    <input onChange={toggleTheme} type="checkbox" id="check" className='toggle-btn x-centered sr-only peer'></input>
                    <span className={`${theme === 'dark' ? 'peer-checked:bg-white' : 'peer-checked:bg-white'} w-2/5 h-4/5 bg-white absolute rounded-full xs:left-0.5 xs:top-0.5 lg:left-1 lg:top-1  xs:peer-checked:left-4 lg:peer-checked:left-9 transition-all duration-500`}></span>
                </label>
                <img src={theme === "dark" ? darkSun : lightSun} className='xs:w-2 lg:w-4' alt='icône soleil'></img>             
            </div> 
        </div>
    </header>
  )
}

export default Navbar