import { useTheme } from './../context/context.jsx'
import { portfolioProjects } from '../data/data.js';
import { useState } from 'react';
import projectpic from './../assets/projects/booki-computer.png'
import ModalComponent from './Modal.jsx';
import { Element } from 'react-scroll';

const Projects = () => {
    const { theme } = useTheme();
    const uniqueCategories = portfolioProjects.reduce((acc, project) => {
        if (!acc.includes(project.category)) {
          acc.push(project.category);
        }
        return acc;
      }, []);
      uniqueCategories.unshift("Tous")

    let [filterCategory, setFilterCategory] = useState('Tous')

    const [isOpen, setIsOpen] = useState(null);

    const openModal = (index) => {
        setIsOpen(index);
    };

    const closeModal = () => {
        setIsOpen(null);
    };

      
  return (
    <Element name='projets'>
    <section className={`xs:py-16 ${theme === "dark" ? "dark" : "light"}`}>
        <div className='flex flex-col xs:items-center xs:gap-6'>
            <h2 className={` ${theme === "dark" ? "bg-h2-white-gradient" : "bg-black"} bg-clip-text text-transparent`}>Mes projets</h2>
            <div className='flex xs:gap-2'>
                {uniqueCategories.map((category, index)=>(
                    <h3 key={index} onClick={() => setFilterCategory(category)}  className={`flex font-bold cursor-pointer xs:px-2 xs:py-2 ${theme === "dark" ? "border" : ""} ${(filterCategory === category) && (theme === 'dark') ? 'bg-pp-gradient border-none' : '' } ${(filterCategory === category) && (theme === 'light') ? 'bg-black text-white' : '' } ${(filterCategory !== category) && (theme === 'light') ? 'bg-zinc-400/20' : ''}`}>
                        {category}
                    </h3>
                ))}
            </div>
            <div className='xs:flex xs:flex-col xs:gap-4 xs:w-[70%] md:grid md:grid-cols-2 lg:grid-cols-3'>
            {portfolioProjects.map((project, index)=> (
                    <div key={index}>
                       <figure onClick={() => openModal(index)} className={`relative group xs:w-[100%] cursor-pointer ${filterCategory === project.category || filterCategory === 'Tous' ? "flex" : "hidden"}`}>
                            <picture className=''>
                                    <source></source>
                                    <img className='w-full' src={projectpic} alt={`projet ${project.name}`}></img>
                            </picture>
                            <div className='hidden group-hover:absolute group-hover:flex hover:justify-center hover:items-center hover:flex-col top-0 left-0 w-full h-full bg-black/30 transition duration-[3000ms]'>
                                <h4 className='text-white font-bold'>{project.name}</h4>
                                <div className='flex gap-2'>
                                    {project.technologies.map((technology, id)=>(
                                        <h5 className='text-white font-bold' key={id}>{technology}</h5>
                                    ))}
                                </div>
                            </div>
                        </figure>
                        {isOpen === index &&<ModalComponent isOpen={true} onClose={closeModal} content={project}/>}
                    </div>
                    
                ))}
            </div>
        </div>

    </section>
    </Element>
  )
}


export default Projects