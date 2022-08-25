import React from 'react'
import Motion from '../../styles/Motion.module.css'

const WhySpring = ({ id, title, paragraph }) => {
  return (
    <div id={id} className={Motion.principle} >
    <div className={Motion.textContainer}>
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </div>
    <div className={Motion.exampleContainer}>
      {example}
    </div>
  </div>
  )
}

export default WhySpring