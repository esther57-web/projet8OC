import bar from './../assets/dark/bars-white.svg'

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between"> 
        <h2>EO</h2>
        <div className="flex"> 
            <div className='flex'>
                <ul className="flex">
                    <li>Accueil</li>
                    <li>Présentation</li>
                    <li>Compétences</li>
                    <li>Projets</li>
                    <li>Contact</li>
                    <li>Mon CV</li>
                </ul>
                <img src={bar} alt="dérouler le menu de navigation"></img>
            </div>
            <label htmlFor="check" className="rounded-full bg-pink-700 w-20 relative h-10 cursor-pointer">
                <input type="checkbox" id="check" className='sr-only peer'></input>
                <span className='w-2/5 h-4/5 bg-white absolute rounded-full left-1 top-1 peer-checked:bg-black peer-checked:left-11 transition-all duration-500'></span>
            </label>
        </div>
    </nav>
  )
}

export default Navbar