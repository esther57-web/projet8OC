import PropTypes from 'prop-types';
import { useTheme } from './../context/context.jsx'

const Cta = (props) => {
    const { theme } = useTheme();

  return (
    <button className={`${theme === "dark" ? "bg-pink-blue-gradient hover:shadow-[5px_5px_20px_-8px]" : "bg-black hover:black-shadow"} text-white xs:px-4 xs:py-2 rounded-[20px] hover:font-bold w-auto lg:px-12 lg:py-4 lg:rounded-[30px]`} aria-label={props.content}>{props.content}</button>
  )
}

Cta.propTypes = {
    content: PropTypes.string.isRequired,
  };

export default Cta