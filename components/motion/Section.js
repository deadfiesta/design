import Motion from '../../styles/Motion.module.scss'

const Section = ({ id, title, subtitle, children }) => {
  return (
    <section className={Motion.section}>
      <div id={id} className={Motion.anchor} />
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