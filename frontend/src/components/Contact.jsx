import { useTheme } from './../context/context.jsx'
import Cta from './Cta.jsx';
import { useState } from 'react';

const Contact = () => {
    const { theme } = useTheme();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/api/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            alert('Message envoyé avec succès !');
        } else {
            alert('Erreur lors de l\'envoi du message.');
        }
    };


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
                    <p className='xs:text-center xs:text-sm'>kamardine.ossete@gmail.com</p>
                </div>
                
            </div>
            <div className='lg:w-1/2'>
                <form onSubmit={handleSubmit} className='flex flex-col xs:gap-2'>
                    <div className='flex flex-col'>
                        <label className='xs:px-4 xs:py-2' htmlFor='name'>Nom complet :</label>
                        <input name='name' onChange={handleChange} required className={`rounded-[20px] focus:outline-none xs:px-4 xs:py-2  ${theme === "dark" ? 'bg-dark-blue-pp placeholder-gray-light' : 'bg-zinc-400/10'}`} aria-label='nom' placeholder='Entrez votre nom complet' id='name' type='text'></input> 
                    </div>
                    <div className='flex flex-col'>
                        <label className='xs:px-4 xs:py-2' htmlFor='email'>Email :</label>
                        <input name='email' onChange={handleChange} required  className={`rounded-[20px] focus:outline-none xs:px-4 xs:py-2  ${theme === "dark" ? 'bg-dark-blue-pp placeholder-gray-light' : 'bg-zinc-400/10'}`} aria-label='email' placeholder='Entrez votre email' id='email' type='email'></input> 
                    </div>
                    <div className='flex flex-col xs:mb-4'>
                        <label className='xs:px-4 xs:py-2' htmlFor='message'>Message :</label>
                        <textarea name='message' onChange={handleChange} required  className={`xs:h-[8rem] rounded-[20px] focus:outline-none xs:px-4 xs:py-2  ${theme === "dark" ? 'bg-dark-blue-pp placeholder-gray-light' : 'bg-zinc-400/10'}`} aria-label='message' placeholder='Ecrivez votre message' id='message' type='text'></textarea> 
                    </div>
                    <Cta content='Envoyer'/>
                </form> 
            </div>
            
        </div>

    </section>
  )
}

export default Contact