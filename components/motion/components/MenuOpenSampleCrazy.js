import Examples from '../../../styles/Examples.module.scss'
import { BiExpand, BiLoaderAlt, BiTransfer, BiAdjust, BiHappy, BiCool, BiShocked, BiConfused, BiBasketball, BiBowlingBall, BiBall, BiFootball, BiTennisBall } from 'react-icons/bi'
import { useState, useEffect, useRef } from 'react'
import { animated, useSpring, useTransition, useTrail } from 'react-spring'

const MenuOpen = ({ changeBall, changeEmoji }) => {
  const [emoji, setEmoji] = useState(false)
  const [ball, setBall] = useState(false)

  const blue = useRef(null)
  const gray = useRef(null)
  const bgPrimary = useRef(null)
  const bgTertiary = useRef(null)

  const subMenuConfig = { mass: .25, tension: 280, friction: 12 }

  const EMOJIS = [<BiTransfer />, <BiExpand />, <BiLoaderAlt />, <BiAdjust />]

  const [emojiDefault, setEmojiDefault] = useState(0)
  const [emojiOne, setEmojiOne] = useState(1)
  const [emojiTwo, setEmojiTwo] = useState(2)
  const [emojiThree, setEmojiThree] = useState(3)

  const emojis = [EMOJIS[emojiDefault], EMOJIS[emojiOne], EMOJIS[emojiTwo], EMOJIS[emojiThree]]
  const emojiTrail = useTrail(emojis.slice(1).length, {
    from: { t: [0, 360], opacity: 0 },
    t: emoji ? [60, 360] : [0, 360],
    opacity: emoji ? 1 : 0,
    config: subMenuConfig
  })

  const BALLS = [<BiBasketball />, <BiBowlingBall />, <BiBall />, <BiFootball />, <BiTennisBall />]
  const [ballDefault, setBallDefault] = useState(0)
  const [ballOne, setBallOne] = useState(1)
  const [ballTwo, setBallTwo] = useState(2)
  const [ballThree, setBallThree] = useState(3)
  const [ballFour, setBallFour] = useState(4)

  const balls = [BALLS[ballDefault], BALLS[ballOne], BALLS[ballTwo], BALLS[ballThree], BALLS[ballFour]]
  const ballTrail = useTrail(balls.slice(1).length, {
    transform: ball ? [60, 360] : [0, 360],
    opacity: ball ? 1 : 0,
    config: subMenuConfig
  })

  const emojiTransitions = useTransition(emoji, {
    from: { scale: .5, },
    leave: { scale: .5 },
    enter: { scale: 1, },
    config: subMenuConfig
  })

  const ballTransitions = useTransition(ball, {
    from: { scale: .5, },
    leave: { scale: .5 },
    enter: { scale: 1, },
    config: subMenuConfig
  })

  const [props, api] = useSpring(() => ({
    from: {
      0: 1.25,
      1: .85,
      2: .85,
      3: .85,
      4: .85,
      5: 1.25,
    },
    0: 1,
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    config: { friction: 14, tension: 240, mass: .5 }
  }))

  const basketAnim = useSpring({
    scale: ball ? 1.2 : 1,
    color: ball ? blue.current : gray.current,
    config: { mass: .55, tension: 240, friction: 12 }
  })

  const happyAnim = useSpring({
    scale: emoji ? 1.2 : 1,
    color: emoji ? blue.current : gray.current,
    config: { mass: .55, tension: 240, friction: 12 }
  })

  const hoverAnim = useSpring({
    backgroundColor: emoji ? bgTertiary : bgPrimary
  })

  const handleEmojiClick = () => {
    setBall(false)
    setEmoji(!emoji)
  }

  const handleBallClick = () => {
    setEmoji(false)
    setBall(!ball)
  }

  const emojiClick = (target) => {
    const currentDefaultEmoji = emojiDefault
    const currentEmoji = target.getAttribute("emoji")

    const slot = target.getAttribute("slot").toString()
    switch (slot) {
      case "1":
        setEmojiOne(currentDefaultEmoji)
        api.start({ 1: 1, reset: true })
        break
      case "2":
        setEmojiTwo(currentDefaultEmoji)
        api.start({ 2: 1, reset: true })
        break
      case "3":
        setEmojiThree(currentDefaultEmoji)
        api.start({ 3: 1, reset: true })
    }
    setEmojiDefault(currentEmoji)
    api.start({ 0: 1, reset: true })
    target.setAttribute("emoji", currentDefaultEmoji)
  }

  const ballClick = (target) => {
    const currentDefault = ballDefault
    const current = target.getAttribute("ball")
    setBallDefault(current)
    const slot = target.getAttribute("slot").toString()
    switch (slot) {
      case "1":
        setBallOne(currentDefault)
        api.start({ 1: 1, reset: true })
        break
      case "2":
        setBallTwo(currentDefault)
        api.start({ 2: 1, reset: true })
        break
      case "3":
        setBallThree(currentDefault)
        api.start({ 3: 1, reset: true })
        break
      case "4":
        setBallThree(currentDefault)
        api.start({ 4: 1, reset: true })
    }
    api.start({ 5: 1, reset: true })
    target.setAttribute("ball", currentDefault)
  }

  useEffect(() => {
    blue.current = getComputedStyle(document.body).getPropertyValue('--font-blue')
    gray.current = getComputedStyle(document.body).getPropertyValue('--font-secondary')
    bgPrimary.current = getComputedStyle(document.body).getPropertyValue('--bg-primary')
    bgTertiary.current = getComputedStyle(document.body).getPropertyValue('--bg-tertiary')
  })

  useEffect(() => {
    changeBall(ballDefault)
  }, [ballDefault, changeBall])

  useEffect(() => {
    switch (emojiDefault) {
      case "0":
        changeEmoji("translate")
        break
      case "1":
        changeEmoji("scale")
        break
      case "2":
        changeEmoji("rotate")
        break
      case "3":
        changeEmoji("opacity")
    }
  }, [emojiDefault, changeEmoji])

  return (
    <div className={`${Examples.example} ${Examples.menu}`}>
      <ul className={Examples.menuContainer}>
        <animated.li style={hoverAnim} className={`${Examples.menuItem} ${Examples.menuOne}`}>
          <animated.div style={{
            ...happyAnim,
            transform: (props[0].to(a => `scale(${a})`)),
          }} className={Examples.innerMenuItem} onClick={handleEmojiClick} >
            {EMOJIS[emojiDefault]}
          </animated.div>
          {emojiTransitions(({ scale }, emoji, key, i) => emoji && (
            <animated.ul key={`${key}${i}`} className={Examples.subMenuContainer} style={{
              transform: (scale).to(s => `scale(${s})`)
            }}>
              {emojiTrail.map(({ t, opacity }, i, key) => (
                <li key={`${key}`} className={Examples.subMenuItem} slot={i + 1} emoji={i + 1} onClick={(e) => emojiClick(e.currentTarget)} >
                  <animated.div style={{
                    opacity: opacity,
                    transform: (t).to((y, r) => `rotate(${r * .135 * (emojis.slice(1).length - i)}deg) translateY(${y}px)`),
                  }}>
                    <animated.div className={Examples.gridCenter} style={{
                      transform: (props[i + 1]).to(n => `scale(${n})`),
                      opacity: (props[i + 1]).to(n => n)
                    }}>
                      <animated.div className={Examples.menuSvg} style={{
                        transform: (t).to((y, r) => `rotate(-${r * .135 * (emojis.slice(1).length - i)}deg)`)
                      }}>
                        {emojis.slice(1)[i]}
                      </animated.div>
                    </animated.div>
                  </animated.div>
                </li>
              ))}
            </animated.ul>
          ))}
        </animated.li>
        <li className={`${Examples.menuItem} ${Examples.menuTwo}`}>
          <animated.div className={Examples.innerMenuItem} onClick={handleBallClick} style={{
            ...basketAnim,
            transform: (props[5].to(a => `scale(${a})`)),
          }} >
            {BALLS[ballDefault]}
          </animated.div>
          {ballTransitions(({ scale }, ball, key) => ball && (
            <animated.ul key={key} className={Examples.subMenuContainer} style={{
              transform: (scale).to(s => `scale(${s})`)
            }}>
              {ballTrail.map(({ transform, opacity }, i, key) => (
                <li key={`${key}balling`} className={Examples.subMenuItem} slot={i + 1} ball={i + 1} onClick={(e) => ballClick(e.currentTarget)} >
                  <animated.div style={{
                    opacity: opacity,
                    transform: (transform).to((y, r) => `rotate(${r * .125 * i + 202.5}deg) translateY(${y}px)`)
                  }}>
                    <animated.div className={Examples.gridCenter} style={{
                      transform: (props[i + 1]).to(n => `scale(${n})`),
                      opacity: (props[i + 1]).to(n => n)
                    }}>
                      <animated.div className={Examples.menuSvg} style={{
                        transform: (transform).to((y, r) => `rotate(${(r * .125 * i + 202.5) * -1}deg)`)
                      }}>
                        {balls.slice(1)[i]}
                      </animated.div>
                    </animated.div>
                  </animated.div>
                </li>
              ))}
            </animated.ul>
          ))}
        </li>
      </ul>
    </div>
  )
}

export default MenuOpen