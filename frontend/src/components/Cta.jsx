import PropTypes from 'prop-types';
import { useTheme } from './../context/context.jsx'

const Cta = (props) => {
    const { theme } = useTheme();

  return (
    <button className={`${theme === "dark" ? "relative bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] hover:shadow-[0px_0px_16px_5px_#8c45ff]" : "bg-black hover:shadow-[0px_0px_5px_2px_#BDBDBD]"}  xs:px-6 xs:py-2 rounded-[20px] w-auto md:px-12 md:py-4 md:rounded-[60px]`} aria-label={props.content}>
      <div className='absolute '>
        <div className='border xs:rounded-[20px] md:rounded-[60px] border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
        <div className='border xs:rounded-[20px] md:rounded-[60px] absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
        <div className='xs:rounded-[20px] md:rounded-[60px] inset-0 absolute shadow-[0_0_10px_rgb(140, 69, 255,.7)_inset]'></div>
      </div>
      <span className='text-white'>{props.content}</span>
    </button>
  )
}

Cta.propTypes = {
    content: PropTypes.string.isRequired,
  };

export default Cta