import bar from './../assets/dark/bars-white.svg'
import darkMoon from './../assets/dark/moon-regular.svg'
import darkSun from './../assets/dark/sun-regular.svg'
import { useScreenSize, useTheme } from './../context/context.jsx'

const Navbar = () => {
    const screenSize = useScreenSize();
    console.log(screenSize)

    //const { theme, toggleTheme } = useTheme();
    //console.log(theme)
  return (
    <nav className="flex sticky items-center px-4 w-full border-b border-cyan-900 lg:justify-between sm:justify-normal"> 
        <h2 className='xs:text-md font-silkscreen '>EO</h2>
        <div className="flex xs:w-full items-center"> 
            <div className='flex md:mr-4 absolute left-1/2 transform -translate-x-1/2'>
                <div className="flex xs:hidden">
                    {['Accueil', 'Présentation', 'Compétences', 'Projets', 'Contact', 'Mon CV'].map((nav, index) => (
                        <a key={index} href={nav === "Accueil" ? '/' : `#${nav}`} className="flex sm:py-5 lg:py-6 px-4 justify-center items-center cursor-pointer hover:bg-pp-gradient transition duration-300 xs:text-xs lg:uppercase ">{nav}</a>
                    ))}
                </div>
                <img src={bar} className='md:hidden' alt="dérouler le menu de navigation"></img>
            </div>      
                <img className='xs:w-2' src={darkMoon} alt='icône lune'></img>
                <label htmlFor="check" className="mx-1 rounded-full bg-pink xs:w-8 xs:h-4  relative lg:h-8 cursor-pointer">
                    <input  type="checkbox" id="check" className='sr-only peer'></input>
                    <span className='w-2/5 h-4/5 bg-white absolute rounded-full xs:left-0.5 xs:top-0.5 peer-checked:bg-black xs:peer-checked:left-4 transition-all duration-500'></span>
                </label>
                <img src={darkSun} className='xs:w-2' alt='icône soleil'></img>             
        </div>
    </nav>
  )
}

export default Navbar