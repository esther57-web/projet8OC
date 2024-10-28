
import PropTypes from 'prop-types'
import darkCross from './../assets/dark/xmark.svg'
import lightCross from './../assets/light/xmark.svg'
import { useTheme } from './../context/context.jsx'
import darkGithub from './../assets/dark/github.svg'
import lightGithub from './../assets/light/github.svg'
import Cta from './Cta.jsx'

const ModalComponent = ({ onClose, content}) => {
    const { theme } = useTheme();

    const handleClick = (event) => {
        event.stopPropagation(); 
    };
  
    return (
        <div onClick={onClose} className={`z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-20`}>
        <div onClick={handleClick} className={`border border-white xs:w-[80%] sm:w-[60%] max-h-svh ${theme === "dark" ? "dark" : "light"}`}>
            <div className={`flex justify-center items-center border-b-[1px] border-transparent xs:p-3 ${theme === "dark" ? "border-white/50" : "border-gray/50"}`}>
                <h5 className='flex justify-center'>{content.name}</h5>
                <img onClick={onClose} className='ml-auto cursor-pointer' src={theme === "dark" ? darkCross : lightCross} alt='icône fermer la modale'></img>
            </div>
            <div className='xs:p-3 xs:flex xs:flex-col xs:gap-2 '>
                <p className='xs:text-xs sm:text-sm md:text-md'>{content.description}</p>
                <div>
                    <h6 className='xs:text-xs sm:text-sm md:text-md'>Technologies utilisées :</h6>
                    <ul className=''>
                    {content.technologies.map((technology, id)=>(
                        <li className='xs:text-xs sm:text-sm md:text-md' key={id}>- {technology}</li>
                    ))}
                    </ul>
                </div>
                <div>
                    <h6 className='xs:text-xs sm:text-sm md:text-md'>Compétences évaluées :</h6>
                    <ul>
                    {content.skill.map((skill, id)=>(
                        <li className='flex gap-2' key={id}>
                            <span>-</span>
                            <p className='xs:text-xs sm:text-sm md:text-md'>{skill}</p>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className='flex gap-2'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-4' src={theme === 'dark'? darkGithub : lightGithub} alt='logo github'></img>
                        <p className='xs:text-xs sm:text-sm md:text-md'>Repository :</p>
                    </div>
                    <a className='underline' href={content.repo} target='_blank'>ici</a>
                </div>
            
                
            </div>
            <div className='flex justify-center'>     
               {content.liveUrl !== "" && (
                    <a className=' mb-4 w-fit' href={content.liveUrl} target='_blank'>
                        <Cta  content='Visiter le site'/>
                    </a>
                    
                )} 
            </div>
            
        </div>
    </div>
    );
}

ModalComponent.propTypes = {
    onClose: PropTypes.func,
    content: PropTypes.object,
}

export default ModalComponent