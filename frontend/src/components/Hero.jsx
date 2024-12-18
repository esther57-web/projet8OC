import { useTheme } from './../context/context.jsx'
import Cta from './Cta.jsx';
import darkProfilPic from './../assets/dark/hero-dark.png'
import lightProfilPic from './../assets/light/hero-light.png'
import stars from './../assets/dark/stars.png'
import download from './../assets/dark/download-solid.svg'
import cv from './../assets/cv-esther.pdf'
import { Element, Link } from 'react-scroll';
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef} from 'react';
import { useInView } from 'react-intersection-observer';


const Hero = () => {
    const { theme } = useTheme();
    const sectionRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })

    const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])

    const [ref, inView] = useInView({
        threshold: 0.1, 
        triggerOnce: false, 
      });

  
  return (
    <Element name=''>
    <motion.section className={`flex h-screen xs:flex-col-reverse xs:items-center xs:justify-center overflow-hidden md:flex-row md:px-8`} 
    ref={sectionRef}
    style={{
        backgroundImage: `url(${theme === "dark" ? stars : ""})`,
        backgroundPositionY
    }}>
        
        <motion.div ref={ref}
        initial={{
            y: 100,
            opacity: 0
        }}
        animate={{
            y: inView? 0 : 100,
            opacity:1
        }}
        transition={{
            duration:1
        }}
         className={`z-30 xs:relative  flex xs:flex-col xs:items-center md:items-start xs:gap-4 xs:w-[80%] md:w-[40%] md:initial md:gap-8  md:-top-2 ${theme === 'dark' ? 'xs:top-40' : 'xs:top-48 sm:top-40'}`}>
            <div className='flex'>
               <h1 className={`${theme === 'dark' ? "bg-dark-text-gradient" : "bg-black"} flex items-center bg-clip-text text-transparent xs:text-3xl xs:font-bold sm:text-[3rem] typing-animation lg:text-[4rem] lg:h-[4rem]`}>Kamardine Esther</h1>
               <span className='animate-pulse xs:text-3xl xs:font-bold ml-2 lg:text-[4rem] lg:h-[4rem]'>|</span>  
            </div>
            
            <p className='xs:text-center xs:text-xs sm:text-sm md:text-start  md:border-l-[1px] md:border-white md:border-transparent md:px-2'>Bienvenue dans mon portfolio ! Je suis développeuse full-stack et je serais ravie de travailler avec vous !</p>
            <Link to='contact' smooth={true} duration={500} spy={true} className='w-fit flex xs:justify-center md:justify-start'><Cta content="Contactez-moi"/></Link>
            
        </motion.div>
        <motion.div ref={ref} 
        initial={{
            
            opacity: 0
        }}
        animate={{
           
            opacity:inView? 1:0
        }}
        transition={{
            duration:1
        }}
        className={`${theme === 'dark' ? '' : "sm:relative sm:top-6"} z-20 md:relative md:top-12 lg:top-24`}>
            <a href={cv} target="_blank" className={`xs:absolute xs:left-[65%] xs:top-[35%] sm:bottom-[8rem] sm:left-[9rem] md:left-[80%] md:top-[6rem] lg:top-[6rem] z-20 xs:h-[70px] xs:w-[70px] sm:h-20 sm:w-20 flex cursor-pointer flex-col items-center justify-center rounded-full sm:relative ${theme === "dark" ? "hover:shadow-[5px_5px_50px_-20px] bg-pink" : "hover:shadow-[5px_5px_40px_-10px_hsl(#000000)] bg-purple"}`}>
                <img className='w-6' src={download} alt='bouton ouvrir le cv'></img>
                <p className={`text-xs text-white font-bold`}>Ouvrir CV</p>
            </a> 
            <div className={`z-[2] xs:absolute xs:overflow-y-hidden xs:overflow-x-visible xs:w-[220px] xs:flex xs:justify-center xs:rounded-full border xs:top-1/2 xs:left-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:transform-none md:mb-44 md:ml-32 sm:w-[300px] lg:w-[400px] lg:ml-28 xl:w-[500px] xl:ml-16 ${theme === "dark" ? "bg-purple border-white/20 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]" : "border-none bg-profil-gradient-light"}`}>
                <img className={`relative top-4 ${theme === 'dark' ? '' : 'xs:right-2'}`} src={theme === "dark" ? darkProfilPic : lightProfilPic} alt='photo d&apos;Esther'></img>
            </div> 
        </motion.div>
        
        {theme === "dark" ? 
        <div className='z-[1]'>
            <div className='absolute z-0 inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]'></div> 
            <motion.div 
            style={{
                translateX:'-50%',
                translateY:'-50%'
            }}
            animate={{
                rotate:'1turn'
            }}
            transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear'
            }}
             className='xs:hidden sm:block absolute sm:h-[350px] sm:w-[350px] md:h-[300px] md:w-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 border rounded-full'>
                <div className='absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
                <div className='absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2'></div>
                <div className='absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center'>
                    <div className='h-2 w-2 bg-white'></div>
                </div>
            </motion.div>
            <motion.div 
            style={{
                translateX:'-50%',
                translateY:'-50%'
            }}
            animate={{
                rotate:'-1turn'
            }}
            transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear'
            }} className='xs:hidden sm:block absolute  xs:h-[420px] xs:w-[420px] rounded-full border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed'></motion.div>
            <motion.div
            style={{
                translateX:'-50%',
                translateY:'-50%'
            }}
            animate={{
                rotate:'1turn'
            }}
            transition={{
                duration: 100,
                repeat: Infinity,
                ease: 'linear'
            }} className='xs:hidden md:block absolute w-max-full h-[550px] w-[550px] rounded-full border border-white opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
                <div className='absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
                    <div className='absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center'>
                        <div className='h-2 w-2 bg-white'></div>
                    </div>
            </motion.div>
        </div> : ""}  
    </motion.section>
    </Element>
  )
}

export default Hero