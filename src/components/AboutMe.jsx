import { useTheme } from './../context/context.jsx'
import darkAbout from './../assets/dark/hacker.jpg'
import lightAbout from './../assets/light/laptop.jpg'
import Cta from './Cta.jsx';

const AboutMe = () => {
    const { theme } = useTheme();
  return (
    <section className={`flex justify-center ${theme === "dark" ? "dark" : "light"}`}>
        <div className='flex xs:flex-col items-center'>
            <div className='flex justify-center'>
                <img className='rounded-full xs:w-[18rem] xs:h-[18rem]' src={theme === "dark" ? darkAbout : lightAbout} alt='image d&apos;un ordinateur'></img>
            </div>
            <div className='xs:w-[80%] flex xs:flex-col xs:gap-4 xs:relative xs:bottom-16'>
                <h2>A propos <br className='xs:hidden'/>de moi</h2>
                <p className='xs:text-center xs:text-xs sm:text-sm'>Développeuse web full stack passionnée. Je suis motivée, autonome et organisée,
                 ce qui me permet de travailler efficacement en full remote. En raison de mon handicap, 
                 je recherche des opportunités qui valorisent la flexibilité et l&apos;inclusion. 
                 Je suis impatiente de mettre mes compétences en développement à profit et de contribuer 
                 à des projets innovants.</p>
                 <div className='flex justify-center'>
                    <Cta content='Embauchez-moi'/>
                 </div>
                
            </div>
        </div>
    </section>
  )
}

export default AboutMe