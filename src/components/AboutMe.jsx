import { useTheme } from './../context/context.jsx'
import darkAbout from './../assets/dark/hacker.jpg'
import lightAbout from './../assets/light/laptop.jpg'
import Cta from './Cta.jsx';

const AboutMe = () => {
    const { theme } = useTheme();
  return (
    <section className={`flex justify-center ${theme === "dark" ? "dark" : "light"} lg:py-16`}>
        <div className='flex xs:flex-col xs:items-center lg:flex-row lg:w-[80%] lg:justify-center'>
            <div className='flex justify-center lg:w-[50%]'>
                <img className='rounded-full xs:w-[18rem] xs:h-[18rem] lg:w-[24rem] lg:h-[24rem]' src={theme === "dark" ? darkAbout : lightAbout} alt='image d&apos;un ordinateur'></img>
            </div>
            <div className='xs:w-[80%] lg:w-[50%] flex xs:flex-col xs:gap-4 xs:relative xs:bottom-16 md:gap-6'>
                <h2 className={`lg:text-start bg-clip-text text-transparent ${theme === "dark" ? "bg-h2-white-gradient" : ""}`}>À propos <br className='xs:hidden'/>de moi</h2>
                <p className='xs:text-center lg:text-start xs:text-xs sm:text-sm lg:text-lg'>Développeuse web full stack passionnée. Je suis motivée, autonome et organisée,
                 ce qui me permet de travailler efficacement. Je recherche des opportunités qui valorisent la flexibilité et l&apos;inclusion. 
                 Je suis impatiente de mettre mes compétences en développement à profit et de contribuer 
                 à des projets innovants.</p>
                 <div className='flex xs:justify-center lg:justify-start'>
                    <Cta content='Contactez-moi'/>
                 </div>
                
            </div>
        </div>
    </section>
  )
}

export default AboutMe