import Motion from '../../styles/Motion.module.scss'

const Principle = ({ title, paragraph, example, label, id }) => {
  return (
    <div className={Motion.principle} >
      <div id={id} className={Motion.anchor} />
      <div className={Motion.textContainer}>
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
      <div className={Motion.exampleContainer}>
        {example}
        <div className={Motion.exampleLabel}>
          {label}
        </div>
      </div>
    </div>
  )
}

export default Principle