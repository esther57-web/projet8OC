import { useTheme } from './../context/context.jsx'
import Cta from './Cta.jsx';

const Contact = () => {
    const { theme } = useTheme();

  return (
    <section id='contact' className={`flex justify-center xs:pb-20 ${theme === "dark" ? "dark" : "light"}`}>
        <div className='xs:w-[80%] md:w-[70%] lg:w-[90%] flex xs:flex-col lg:flex-row xs:gap-4'>
            <div className='lg:w-1/2'>
                <h2 className='xs:my-4'>Contact</h2>
                <p className='xs:text-center lg:text-start'>
                    N&apos;hésitez pas à me contacter pour toute question, collaboration ou simplement 
                    pour discuter de projets passionnants.
                </p>
                <div className='flex m-auto border rounded-xl xs:py-1 xs:px-4 xs:mt-2 w-fit'>
                    <p className='xs:text-center'>kamardine.ossete@gmail.com</p>
                </div>
                
            </div>
            <div className='lg:w-1/2'>
                <form className='flex flex-col xs:gap-2'>
                    <div className='flex flex-col'>
                        <label className='xs:px-4 xs:py-2' htmlFor='name'>Nom complet :</label>
                        <input className={`rounded-[20px] focus:outline-none xs:px-4 xs:py-2  ${theme === "dark" ? 'bg-dark-blue-pp placeholder-gray-light' : 'bg-zinc-400/10'}`} aria-label='nom' placeholder='Entrez votre nom complet' id='name' type='text'></input> 
                    </div>
                    <div className='flex flex-col'>
                        <label className='xs:px-4 xs:py-2' htmlFor='email'>Email :</label>
                        <input className={`rounded-[20px] focus:outline-none xs:px-4 xs:py-2  ${theme === "dark" ? 'bg-dark-blue-pp placeholder-gray-light' : 'bg-zinc-400/10'}`} aria-label='email' placeholder='Entrez votre email' id='email' type='email'></input> 
                    </div>
                    <div className='flex flex-col xs:mb-4'>
                        <label className='xs:px-4 xs:py-2' htmlFor='message'>Message :</label>
                        <textarea className={`xs:h-[8rem] rounded-[20px] focus:outline-none xs:px-4 xs:py-2  ${theme === "dark" ? 'bg-dark-blue-pp placeholder-gray-light' : 'bg-zinc-400/10'}`} aria-label='message' placeholder='Ecrivez votre message' id='message' type='text'></textarea> 
                    </div>
                    <Cta content='Envoyer'/>
                </form> 
            </div>
            
        </div>

    </section>
  )
}

export default Contact