import { useTheme } from './../context/context.jsx'
import Cta from './Cta.jsx';
import darkProfilPic from './../assets/femme.png'
import lightProfilPic from './../assets/femme-noire.png'
import stars from './../assets/dark/stars.png'
import download from './../assets/dark/download-solid.svg'
//import { useState, useEffect } from 'react';


const Hero = () => {
    const { theme } = useTheme();
  
  return (
    <section className={`flex h-screen xs:flex-col-reverse xs:items-center xs:justify-center overflow-hidden md:flex-row md:px-8 ${theme === "dark" ? "dark" : "light"}`} style={{backgroundImage: `url(${theme === "dark" ? stars : ""})`}}>
        
        <div className='z-30 xs:relative xs:top-32 md:-top-2  flex xs:flex-col xs:items-center md:items-start xs:gap-4 xs:w-[70%] md:w-[40%] md:initial md:gap-8'>
            <div className='flex'>
               <h1 className={`${theme === 'dark' ? "bg-dark-text-gradient" : "bg-light-text-gradient"} flex items-center bg-clip-text text-transparent xs:text-3xl xs:font-bold sm:text-[3rem] typing-animation lg:text-[4rem] lg:h-[4rem]`}>Kamardine Esther</h1>
               <span className='animate-pulse xs:text-3xl xs:font-bold ml-2 lg:text-[4rem] lg:h-[4rem]'>|</span>  
            </div>
            
            <p className='xs:text-center md:text-start  md:border-l-2 md:border-white md:border-transparent md:px-2'>Je suis développeuse front-end en full-remote</p>
            <div className='w-full flex xs:justify-center md:justify-start'><Cta content="Contactez-moi"/></div>
            
        </div>
        <div className='z-20 md:relative md:top-12 lg:top-24'>
            <div className={`xs:absolute xs:left-[65%] xs:top-[35%] sm:left-[60%] md:left-[85%] md:top-[4rem] lg:top-[8rem] z-20 bg-pink h-20 w-20 flex cursor-pointer flex-col items-center justify-center rounded-full md:relative ${theme === "dark" ? "hover:shadow-[5px_5px_50px_-20px]" : "hover:shadow-[5px_5px_40px_-10px_hsl(#000000)]"}`}>
                <img className='w-6' src={download} alt='bouton ouvrir le cv'></img>
                <p className='text-xs'>Ouvrir CV</p>
            </div> 
            <div className={`z-[2] xs:absolute xs:overflow-y-hidden xs:overflow-x-visible xs:w-[220px] xs:flex xs:justify-center xs:rounded-full border xs:top-1/2 xs:left-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:transform-none md:mb-44 md:ml-32 md:w-[300px] lg:w-[400px] lg:ml-28 xl:w-[500px] xl:ml-16 ${theme === "dark" ? "bg-purple border-white/20 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]" : "bg-gray"}`}>
                <img className='relative top-4' src={theme === "dark" ? darkProfilPic : lightProfilPic} alt='photo d&apos;Esther'></img>
            </div> 
        </div>
         
        
        
        {theme === "dark" ? 
        <div className='z-[1]'>
            <div className='absolute z-0 inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]'></div> 
            <div className='absolute xs:h-[300px] xs:w-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 border rounded-full'>
                <div className='absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
                <div className='absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2'></div>
                <div className='absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center'>
                    <div className='h-2 w-2 bg-white'></div>
                </div>
            </div>
            <div className='absolute xs:h-[400px] xs:w-[400px] rounded-full border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed'></div>
            <div className='absolute h-[550px] w-[550px] rounded-full border border-white opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
                <div className='absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
                <div className='absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center'>
                    <div className='h-2 w-2 bg-white'></div>
                </div>
            </div>
        </div> : ""}  
    </section>
  )
}

export default Hero