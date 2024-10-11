import PropTypes from 'prop-types'
import { useTheme } from './../context/context.jsx'

const Projects = props => {
    const { theme } = useTheme();
  return (
    <section className={`${theme === "dark" ? "dark" : "light"}`}>
        <div>
            <h2 className={`${theme === "dark" ? "bg-h2-white-gradient" : ""} bg-clip-text text-transparent`}>Mes projets</h2>
            <div>

            </div>
            <div>

            </div>
        </div>

    </section>
  )
}

Projects.propTypes = {}

export default Projects