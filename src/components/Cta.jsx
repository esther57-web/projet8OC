import PropTypes from 'prop-types';
import { useTheme } from './../context/context.jsx'

const Cta = (props) => {
    const { theme } = useTheme();

  return (
    <button className={`${theme === "dark" ? "bg-pink-blue-gradient" : "bg-green-500"} xs:px-4 xs:py-2 rounded-[20px] hover:font-bold hover:shadow-[5px_5px_20px_-8px]`}>{props.content}</button>
  )
}

Cta.propTypes = {
    content: PropTypes.string.isRequired,
  };

export default Cta