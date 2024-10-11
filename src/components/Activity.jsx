import { activitiesSlider } from "../data/data.js"
import { useTheme } from './../context/context.jsx'


const Activity = () => {
    const { theme } = useTheme();
  return (
    <section className={`${theme === "dark" ? "dark" :  "light"} overflow-hidden xs:pb-12 xs:px-8 flex`}>
    
          <div className="flex items-center">
           <div className="flex overflow-hidden mask [mask-image:linear-gradient(to-right,transparent,black_20%,black_80%,transparent)]">
              <div className="flex xs:gap-16 max-w-full pr-4">
                {activitiesSlider.map((activity, index)=> (
                    <div key={index} className="flex items-center gap-2">
                        <img className="" src={`${theme === "dark" ? activity.darkImg : activity.lightImg}`} alt={`icône ${activity.name}`}></img>
                        <h3 className="xs:text-xl whitespace-nowrap">{activity.name}</h3>
                    </div>
                ))}
              </div>
            </div> 
        
        </div>
        
        
    </section>
  )
}

export default Activity