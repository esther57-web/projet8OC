import { useTheme } from './../context/context.jsx'

const Contact = () => {
    const { theme } = useTheme();

  return (
    <section className={`${theme === "dark" ? "dark" : "light"}`}>
        <div>
            <
        </div>

    </section>
  )
}

export default Contact