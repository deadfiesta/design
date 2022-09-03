import Examples from '../../../styles/Examples.module.scss'
import { useState, useEffect, useRef } from 'react'
import { BiDumbbell, BiRocket, BiMeteor } from 'react-icons/bi'
import { animated, useSpring } from 'react-spring'

const SpringPropsDemo = ({ type }) => {

  const [mass, setMass] = useState(1)
  const [tension, setTension] = useState(180)
  const [friction, setFriction] = useState(20)

  const blue = useRef(null)
  const gray = useRef(null)

  const [mDrag, setMDrag] = useState(false)
  const [tDrag, setTDrag] = useState(false)
  const [fDrag, setFDrag] = useState(false)

  const [flip, setFlip] = useState(false)

  const { sm, st, sf } = useSpring({
    sm: mDrag ? 1.1 : 1,
    st: tDrag ? 1.1 : 1,
    sf: fDrag ? 1.1 : 1,
    config: { tension: 260, friction: 8, mass: .25 }
  })

  const { translate, rotate, scale, opacity } = useSpring({
    reverse: flip,
    from: { translate: -200, rotate: 0, scale: 1, opacity: 0 },
    translate: 200, rotate: 90, scale: 2, opacity: 1,
    onRest: () => setFlip(!flip),
    config: { mass: mass, tension: tension, friction: friction }
  })

  const springOptions = [
    {
      state: mass === '0' ? mass : Number(mass).toFixed(1),
      setState: (e) => setMass(e.target.value),
      title: "mass",
      component: <BiDumbbell size={24} />,
      min: .1,
      max: 10,
      step: 0.1,
      dragState: mDrag,
      setDragState: setMDrag,
      scale: sm
    },
    {
      state: tension,
      setState: (e) => setTension(e.target.value),
      title: "tension",
      component: <BiRocket size={24} />,
      min: 1,
      max: 500,
      step: 1,
      dragState: tDrag,
      setDragState: setTDrag,
      scale: st,
    },
    {
      state: friction,
      setState: (e) => setFriction(e.target.value),
      title: "friction",
      component: <BiMeteor size={24} />,
      min: 1,
      max: 100,
      step: 1,
      dragState: fDrag,
      setDragState: setFDrag,
      scale: sf
    }
  ]

  useEffect(() => {
    blue.current = getComputedStyle(document.body).getPropertyValue('--font-blue')
    gray.current = getComputedStyle(document.body).getPropertyValue('--font-primary')
  }, [blue, gray])

  return (
    <div className={`${Examples.example} ${Examples.springDemo}`}>
      <div className={Examples.controllerContainer}>
        <ul className={Examples.controllerOptionList}>
          {springOptions.map((option, i, key) => (
            <li key={`${key}${i}`} className={Examples.controllerOption}>
              <div className={Examples.controllerIconContainer}>
                <animated.div style={{
                  transform: (option.scale).to(n => `scale(${n})`)
                }} className={option.dragState ? `${Examples.blue} ${Examples.controllerIcon}` : `${Examples.controllerIcon}`}>
                  {option.component}
                </animated.div>
              </div>
              <div className={Examples.controllerInputContainer}>
                <input type="range" value={option.state} onPointerDown={() => option.setDragState(true)} onPointerUp={() => option.setDragState(false)} onChange={option.setState} step={option.step} name={option.title} id={option.title} min={option.min} max={option.max} />
                <label htmlFor={option.title} />
              </div>
              <div className={Examples.controllerValueContainer}>
                <animated.div style={{
                }} className={option.dragState ? `${Examples.blue} ${Examples.controllerValue}` :`${Examples.controllerValue}`}>{option.state}</animated.div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={Examples.demoContainer}>
        <div className={Examples.demoElementWrapper}>
          <animated.div style={{
            transform: 
            type === "translate" 
            ? (translate).to(t => `translateX(${t}%)`)
            : type === "rotate"
            ? (rotate).to(r => `rotate(${r}deg)`)
            : type === "scale"
            ? (scale).to(s => `scale(${s})`)
            : 'translateX(0) rotate(0)deg scale(1)',
            opacity: type === "opacity" ? opacity : 1,
          }} className={Examples.demoElement} />
        </div>
      </div>
    </div>
  )
}

export default SpringPropsDemo