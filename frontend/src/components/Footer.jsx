import { useTheme } from './../context/context.jsx'

const Footer = () => {
    const { theme } = useTheme();
  return (
    <footer className={`flex justify-center items-center  ${theme === 'dark' ? 'dark' : 'light'}`}>
        <div className={`xs:w-[80%] xs:py-8 border-t-[1px] border-transparent ${theme === "dark"? 'border-blue' : ''}`} >
           <p className='text-center'>@ 2024 Esther Ossete Kamardine. All rights reserved</p> 
        </div>
        
    </footer>
  )
}

export default Footer