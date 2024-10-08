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

const Navbar = () => {
    
    let [isNavbarVisible, setIsNavbarVisible] = useState(false)
    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible)
    }
    
    const { theme, toggleTheme } = useTheme();
    console.log(theme)
  return (
    <nav className={`flex sticky items-center xs:px-2 xs:py-2 w-full border-b border-cyan-900 lg:justify-between sm:justify-normal ${theme === "dark"? "dark" : "light"}`}> 
        <h2 className='xs:text-md font-silkscreen'>EO</h2>
        <div className="flex xs:flex-row-reverse xs:w-full items-center relative sm:flex-row"> 
            <div className='flex md:mr-4'>
                <div className={`${isNavbarVisible ? "xs:block xs:absolute xs:left-1/2 xs:top-7 xs:transform -translate-x-1/2 xs:py-2 xs:border-b xs:border-cyan-900" : "xs:hidden"} ${theme === "dark" ? "dark" : "light"} sm:flex w-full`}>
                    <img src={theme === "dark" ? darkCross : lightCross} onClick={toggleNavbar} className='flex ml-auto mr-4 cursor-pointer sm:hidden'></img>
                    {['Accueil', 'Présentation', 'Compétences', 'Projets', 'Contact', 'Mon CV'].map((nav, index) => (
                        <a key={index} href={nav === "Accueil" ? '/' : `#${nav}`} className="flex xs:leading-relaxed sm:py-5 lg:py-6 px-4 justify-center items-center cursor-pointer hover:bg-pp-gradient transition duration-300 xs:text-xs lg:uppercase ">{nav}</a>
                    ))}
                </div>
                <img src={theme === "dark" ? darkBar : lightBar} onClick={toggleNavbar} className='cursor-pointer sm:hidden' alt="dérouler le menu de navigation"></img>
            </div>
            <div className='flex xs:absolute xs:left-1/2 xs:transform -translate-x-1/2 sm:relative sm:left-auto sm:transform-none'>     
                <img className='xs:w-2' src={theme === "dark" ? darkMoon : lightMoon} alt='icône lune'></img>
                <label htmlFor="check" className="mx-1 flex rounded-full bg-pink xs:w-8 xs:h-4  relative lg:h-8 cursor-pointer">
                    <input onChange={toggleTheme} type="checkbox" id="check" className='x-centered sr-only peer'></input>
                    <span className='w-2/5 h-4/5 bg-white absolute rounded-full xs:left-0.5 xs:top-0.5 peer-checked:bg-black xs:peer-checked:left-4 transition-all duration-500'></span>
                </label>
                <img src={theme === "dark" ? darkSun : lightSun} className='xs:w-2' alt='icône soleil'></img>             
            </div> 
        </div>
    </nav>
  )
}

export default Navbar