import { useTheme } from './../context/context.jsx'
import darkGithub from './../assets/dark/github.svg'
import lightGithub from './../assets/light/github.svg'
import darkLinkedin from './../assets/dark/linkedin.svg'
import lightLinkedin from './../assets/light/linkedin.svg'

const Social = () => {
  const { theme } = useTheme();
  return (
    <aside className='z-40 fixed top-1/2 right-0 mr-4'>
      <div className='flex flex-col gap-4'>
        <a href='https://www.linkedin.com/in/esther-ossete-kamardine-8115a3277/'>
          <img className='xs:w-8' src={theme === 'dark' ? darkLinkedin : lightLinkedin}></img>
        </a>
        <a href='https://github.com/esther57-web'>
          <img className='xs:w-8' src={theme === 'dark' ? darkGithub : lightGithub}></img>
        </a>
      </div>
    </aside>
  )
}

export default Social