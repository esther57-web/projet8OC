import { useTheme } from './../context/context.jsx'
import Cta from './Cta.jsx';
import darkProfilPic from './../assets/femme.png'
import lightProfilPic from './../assets/femme-noire.png'
import stars from './../assets/dark/stars.png'
//import { useState, useEffect } from 'react';


const Hero = () => {
    const { theme } = useTheme();
  
  return (
    <section className={`flex h-screen xs:flex-col-reverse xs:items-center justify-center ${theme === "dark" ? "dark" : "light"}`} style={{backgroundImage: `url(${theme === "dark" ? stars : ""})`}}>
        <div className='flex xs:flex-col xs:items-center xs:gap-4 xs:w-[70%]'>
            <div className='flex'>
               <h1 className={`${theme === 'dark' ? "bg-dark-text-gradient" : "bg-light-text-gradient"} bg-clip-text text-transparent xs:text-3xl xs:font-bold typing-animation`}>Kamardine Esther</h1>
               <span className='animate-pulse xs:text-3xl xs:font-bold ml-2 '>|</span>  
            </div>
            
            <p className='xs:text-center'>Je suis développeuse front-end en full-remote</p>
            <Cta />
        </div>
        <div className={`xs:overflow-y-hidden xs:overflow-x-visible xs:w-1/2 xs:flex xs:justify-center xs:rounded-full border ${theme === "dark" ? "bg-purple border-white/20 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]" : "bg-gray"}`}>
            <img className='relative top-4' src={theme === "dark" ? darkProfilPic : lightProfilPic} alt='photo d&apos;Esther'></img>
        </div>
        <div className='absolute xs:h-[300px] xs:w-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 border border-white/20 rounded-full'></div>
    </section>
  )
}

export default Hero