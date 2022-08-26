import Examples from '../../../styles/Examples.module.scss'
import { useState, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import { BiMoon, BiSun } from "react-icons/bi"

const SwitchLightDark = () => {

  const [dark, setDark] = useState(false)

  const toggleAnim = useSpring({
    left: dark ? 48 : 7,
    config: { mass: .45, tension: 320, friction: 16 }
  })

  const toggleShrink = useSpring({
    scale: dark ? 0 : 1.05,
    config: { mass: .3, friction: 18 }
  })

  const sunAnim = useSpring({
    transform: dark ? "rotate(180deg)" : "rotate(0deg)",
    config: { mass: .35, tension: 240, friction: 24 }
  })

  const moonAnim = useSpring({
    transform: dark ? "rotate(0deg)" : "rotate(180deg)",
    config: { mass: .35, tension: 240, friction: 24 }
  })

  const sunRotate = useSpring({
    transform: dark ? "rotate(180deg)" : "rotate(0deg)",
    config: { friction: 30 },
    delay: dark ? 0 : 100
  })

  const moonRotate = useSpring({
    transform: dark ? "rotate(0deg)" : "rotate(270deg)",
    config: { mass: 2, friction: 26 }
  })

  const handleOnClick = () => {
    const body = document.body
    setDark(!dark)
    dark ? body.classList.remove("dark") : body.classList.add("dark")
  }

  useEffect(() => {
    const body = document.body
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? (setDark(true), body.classList.add("dark")) : (setDark(false), body.classList.remove("dark"))
  }, [])

  useEffect(() => {
    const body = document.body
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      event.matches ? (setDark(true), body.classList.add("dark")) : (setDark(false), body.classList.remove("dark"))
    });
  })

  return (
    <div className={`${Examples.example} ${Examples.switch}`}>
      <div onClick={handleOnClick} className={Examples.toggle}>
        <animated.div style={toggleAnim} className={Examples.button}>
          <div className={Examples.iconContainer}>
            <animated.div style={sunAnim} className={`${Examples.icon} ${Examples.sun}`}>
              <animated.div style={sunRotate} className={Examples.iconInner}>
                <BiSun size={28} />
              </animated.div>
            </animated.div>
          </div>
          <div className={Examples.iconContainer}>
            <animated.div style={moonAnim} className={`${Examples.icon} ${Examples.moon}`}>
              <animated.div style={moonRotate} className={Examples.iconInner}>
                <BiMoon size={28} />
              </animated.div>
            </animated.div>
          </div>

        </animated.div>
        <animated.div style={toggleShrink} className={Examples.bg} />
      </div>
    </div>
  )
}

export default SwitchLightDark