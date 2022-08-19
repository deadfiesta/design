import Motion from '../../styles/Motion.module.css'

const Section = ({ title, subtitle, children }) => {
  return (
    <section>
      <div className={Motion.title}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className={Motion.innerContainer}>
        {children}
      </div>
    </section>
  )
}

export default Section