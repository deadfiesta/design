import React from 'react'
import Examples from '../../../styles/Examples.module.scss'
import { animated, useSpring, easings } from 'react-spring'

const SpinnerCircle = () => {

  const len = 232.1023406982422 // circle.current.getTotalLength()
  const quarter = len * .25 // 25% of total length
  const dashAnimEase = useSpring({
    loop: true,
    from: { strokeDasharray: len, strokeDashoffset: len - quarter },
    to: [
      { strokeDashoffset: quarter },
      { strokeDashoffset: len - quarter }
    ],
    config: { duration: 500, config: { easing: easings.easeOutCubic } }
  })

  const rotateAnimEase = useSpring({
    loop: true,
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
    config: { duration: 500, config: { easing: easings.easeInCubic } }
  })

  return (
    <div className={Examples.spinner}>
      <div className={`${Examples.circleAbsolute} ${Examples.top}`}>
        <animated.svg className={`${Examples.circle} ${Examples.blue}`}
          width="80"
          height="80"
          viewBox="0 0 80 80"
          style={rotateAnimEase}>
          <animated.circle
            cx="40"
            cy="40"
            r="37"
            style={dashAnimEase}
          />
        </animated.svg>
      </div>
      <div className={Examples.bg}>
        <svg className={`${Examples.circle} ${Examples.gray}`} width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="37" />
        </svg>
      </div>
    </div>
  )
}

export default SpinnerCircle