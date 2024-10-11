import { useTheme } from './../context/context.jsx'
import { allSkills } from '../data/data.js';

const Skills = () => {
    const { theme } = useTheme();
  return (
    <section className={`${theme === "dark" ? "dark" : "light"}`}>
        <div>
            <h2>Compétences</h2>
            <div className='xs:my-6 md:grid md:grid-cols-2'>
                {allSkills.map((skill, index)=>(
                    <div className={`flex xs:py-2 xs:justify-center xs:gap-4 border-y-[1px] border-transparent md:justify-start md:pl-[20%] md:py-3 lg:pl-[30%] lg:py-4  ${theme === "dark" ? "border-white/50" : "border-gray/50"}`} key={index}>
                        <div className='flex xs:gap-2 items-center'>
                            <img className='lg:w-[2rem]' src={theme === "dark" ? skill.darkSkill : skill.lightSkill} alt={`icône ${skill.name}`}></img>
                            <h3 className='md:text-lg lg:text-xl'>{skill.name}</h3>
                        </div>
                        <div className='flex xs:items-center xs:gap-1 lg:gap-2'>
                            {Array(skill.rate).fill().map((_, id) => (
                                <i key={`filled-${id}`} className={`flex xs:h-2 xs:w-2 rounded-full sm:h-3 sm:w-3 md:w-4 md:h-4 ${theme === "dark" ? "bg-pink" : "bg-purple"}`}/>
                            ))}
                            {Array(10 - skill.rate).fill().map((_, id) => (
                                <i key={`empty-${id}`} className={`flex xs:h-2 xs:w-2 rounded-full sm:h-3 sm:w-3 md:w-4 md:h-4 ${theme === "dark" ? "bg-purple" : "bg-slate-300"}`}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills