
import PropTypes from 'prop-types'
import darkCross from './../assets/dark/xmark.svg'
import lightCross from './../assets/light/xmark.svg'
import { useTheme } from './../context/context.jsx'

const ModalComponent = ({ onClose, content}) => {
    const { theme } = useTheme();
  
    return (
        <div className={`z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-20`}>
        <div className={`border border-white xs:w-[60%] ${theme === "dark" ? "dark" : "light"}`}>
            <div className={`flex justify-center items-center border-b-[1px] border-transparent xs:p-3 ${theme === "dark" ? "border-white/50" : "border-gray/50"}`}>
                <h5 className='flex justify-center'>{content.name}</h5>
                <img onClick={onClose} className='ml-auto' src={theme === "dark" ? darkCross : lightCross} alt='icône fermer la modale'></img>
            </div>
            <div className='xs:p-3 xs:flex xs:flex-col xs:gap-2 '>
                <p className='flex gap-2'>- 
                    {content.technologies.map((technology, id)=>(
                        <span key={id}>{technology}</span>
                    ))}
                </p>
                <ul>
                    {content.skill.map((skill, id)=>(
                        <li className='decor' key={id}>- {skill}</li>
                    ))}
                </ul>
                <a href={content.repo}>Repository : ici </a>
            </div>
            <div className={`flex justify-center items-center border-t-[1px] border-transparent xs:py-3 ${theme === "dark" ? "border-white/50" : "border-gray/50"}`}>
               {content.liveUrl !== "" && (
                    <a href={content.liveUrl}>Visiter le site</a>
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