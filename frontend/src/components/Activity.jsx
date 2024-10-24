import { activitiesSlider } from "../data/data.js"
import { useTheme } from './../context/context.jsx'
import { motion } from "framer-motion";


const Activity = () => {
    const { theme } = useTheme();
  return (
    <section className={`${theme === "dark" ? 'border-white/30' : 'border-black/30'} border-y-[1px] overflow-hidden xs:py-8 lg:py-12 xs:px-8 flex`}>
    
          <div className="flex items-center">
           <div className="flex overflow-hidden mask [mask-image:linear-gradient(to-right,transparent,black_20%,black_80%,transparent)]">
              <motion.div 
              initial={{
                translateX:'-50%'
              }}
              animate={{
                translateX: '0'
              }}
              transition={{
                repeat: Infinity,
                duration: 40
              }} className="flex -translate-x-1/2 xs:gap-16 max-w-full pr-4 md:gap-32 lg:gap-48 xl:gap-72">
                {activitiesSlider.map((activity, index)=> (
                    <div key={index} className="flex items-center gap-2">
                        <img className="flex sm:w-4" src={`${theme === "dark" ? activity.darkImg : activity.lightImg}`} alt={`icône ${activity.name}`}></img>
                        <h2 className="xs:text-xl md:text-[1.2rem] lg:text-[1.5rem] whitespace-nowrap">{activity.name}</h2>
                    </div>
                ))}
              </motion.div>
            </div> 
        
        </div>
        
        
    </section>
  )
}

export default Activity