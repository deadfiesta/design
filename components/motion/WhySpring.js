import React from 'react'
import Motion from '../../styles/Motion.module.scss'

const WhySpring = ({ id, title, description, example }) => {
  return (
    <div id={id} className={Motion.principle} >
      <div className={Motion.textContainer}>
        <h3>{title}</h3>
        <div className={Motion.descriptionContainer}>
          {description}
        </div>
      </div>
      <div className={Motion.exampleContainer}>
        {example}
      </div>
    </div>
  )
}

export default WhySpring