import { useTheme } from './../context/context.jsx'
import lightAbout from './../assets/light/about-light.jpeg'
import darkAbout from './../assets/light/laptop.jpg'
import Cta from './Cta.jsx';
import { Element, Link } from 'react-scroll';
import { motion} from 'framer-motion';
//import { useState, useEffect} from 'react';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
    const { theme } = useTheme();
    /*let [isScreenLg, setIsScreenLg] = useState()
   
    useEffect(() => {
      const handleResize = () => {
          window.innerWidth > 1068 ? setIsScreenLg(true) : setIsScreenLg(false);
      };
  
      window.addEventListener('resize', handleResize);
      handleResize(); // Vérifier la taille initiale
  
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);*/

  const [ref, inView] = useInView({
    threshold: 0.1, 
    triggerOnce: false, 
  });
 
  return (
    <Element name='presentation'>
    <section className={`flex justify-center py-16 lg:py-32 ${theme === 'dark' ? 'bg-dark-blue-pp-bg' : ''}`}>
        <div className='flex xs:flex-col xs:items-center lg:flex-row lg:w-[80%] lg:justify-center'>
            <motion.div ref={ref} 
            initial={{
                y:-50 ,
                opacity: 0,
            }}
            animate={{
                y:inView?0:-50,
                opacity:1
            }}
            transition={{
                duration:1
            }}
            className='flex justify-center lg:w-[50%]'>
                <img className='rounded-full xs:w-[18rem] xs:h-[18rem] lg:w-[24rem] lg:h-[24rem]' src={theme === "dark" ? darkAbout : lightAbout} alt='image d&apos;un ordinateur'></img>
            </motion.div>
            <motion.div ref={ref}
            initial={{
                y: 50,
                opacity: 0
            }}
            animate={{
                y:inView?0:50,
                opacity:1
            }}
            transition={{
                duration:1
            }}
             className='xs:w-[80%] lg:w-[50%] flex xs:flex-col xs:gap-4  md:gap-6'>
                <h2 className={`lg:text-start bg-clip-text ${theme === "dark" ? "bg-h2-white-gradient text-transparent" : ""}`}>À propos <br className='xs:hidden'/>de moi</h2>
                <p className='xs:text-center lg:text-start xs:text-xs sm:text-sm lg:text-lg'>Développeuse web full stack passionnée. Je suis motivée, autonome et organisée,
                 ce qui me permet de travailler efficacement. Je recherche des opportunités qui valorisent la flexibilité et l&apos;inclusion. 
                 Je suis impatiente de mettre mes compétences en développement à profit et de contribuer 
                 à des projets innovants.</p>
                 <Link to='contact' smooth={true} duration={500} spy={true} className='flex xs:justify-center lg:justify-start'>
                    <Cta content='Contactez-moi'/>
                 </Link>
                
            </motion.div>
            
        </div>
    </section>
    </Element>
  )
}

export default AboutMe