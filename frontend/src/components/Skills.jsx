import { useTheme } from './../context/context.jsx'
import { allSkills } from '../data/data.js';

const Skills = () => {
    const { theme } = useTheme();
  return (
    <section id='competences' className={`${theme === "dark" ? "dark" : "light"}`}>
        <div>
            <h2 className={`bg-clip-text text-transparent my-10 ${theme === "dark" ? "bg-h2-white-gradient" : "bg-black"}`}>Compétences</h2>
            <div className='xs:py-6 sm:grid sm:grid-cols-2'>
                {allSkills.map((skill, index)=>(
                    <div className={`flex xs:py-2 xs:justify-center xs:items-center xs:gap-4 border-y-[1px] border-transparent sm:justify-start sm:pl-[30%] md:py-3 lg:pl-[30%] lg:py-4  ${theme === "dark" ? "border-white/50" : "border-black/40"}`} key={index}>
                            <img className='lg:w-[2rem]' src={theme === "dark" ? skill.darkSkill : skill.lightSkill} alt={`icône ${skill.name}`}></img>
                            <h3 className={`md:text-lg lg:text-xl`}>{skill.name}</h3>
                        
                        
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills