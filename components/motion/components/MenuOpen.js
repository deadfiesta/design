import Examples from '../../../styles/Examples.module.scss'
import { BiHappy, BiCool, BiShocked, BiConfused, BiBasketball, BiBowlingBall, BiBall, BiFootball, BiTennisBall } from 'react-icons/bi'
import { useState, useEffect, useRef } from 'react'
import { animated, useSpring } from 'react-spring'

const MenuOpen = () => {
  const [emoji, setEmoji] = useState(false)
  const [ball, setBall] = useState(false)

  const blue = useRef(null)
  const gray = useRef(null)
  const bgPrimary = useRef(null)
  const bgTertiary = useRef(null)

  const subMenuConfig = { mass: .25, tension: 220, friction: 10 }

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

  const coolAnim = useSpring({
    opacity: emoji ? 1 : 0,
    transform: `rotate(135deg) translateY(${emoji ? "60px" : "0px"})`,
    config: subMenuConfig
  })
  const shockedAnim = useSpring({
    opacity: emoji ? 1 : 0,
    transform: `rotate(85deg) translateY(${emoji ? "60px" : "0px"})`,
    config: subMenuConfig,
    delay: 25
  })
  const confusedAnim = useSpring({
    opacity: emoji ? 1 : 0,
    transform: `rotate(35deg) translateY(${emoji ? "60px" : "0px"})`,
    config: subMenuConfig,
    delay: 50
  })

  const bowlingAnim = useSpring({
    opacity: ball ? 1 : 0,
    transform: `rotate(-160deg) translateY(${ball ? "60px" : "0px"})`,
    config: subMenuConfig
  })

  const biAnim = useSpring({
    opacity: ball ? 1 : 0,
    transform: `rotate(-110deg) translateY(${ball ? "60px" : "0px"})`,
    config: subMenuConfig,
    delay: 25
  })

  const footballAnim = useSpring({
    opacity: ball ? 1 : 0,
    transform: `rotate(-60deg) translateY(${ball ? "60px" : "0px"})`,
    config: subMenuConfig ,
    delay: 50,
  })

  const tennisAnim = useSpring({
    opacity: ball ? 1 : 0,
    transform: `rotate(-10deg) translateY(${ball ? "60px" : "0px"})`,
    config: subMenuConfig,
    delay: 75
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
  
  useEffect(()=>{
    blue.current = getComputedStyle(document.body).getPropertyValue('--font-blue')
    gray.current = getComputedStyle(document.body).getPropertyValue('--font-secondary')
    bgPrimary.current = getComputedStyle(document.body).getPropertyValue('--bg-primary')
    bgTertiary.current = getComputedStyle(document.body).getPropertyValue('--bg-tertiary')
  })

  return (
    <div className={`${Examples.example} ${Examples.menu}`}>
      <ul className={Examples.menuContainer}>
        <animated.li style={hoverAnim} className={`${Examples.menuItem} ${Examples.menuOne}`}>
          <animated.div style={happyAnim} className={Examples.innerMenuItem} onClick={handleEmojiClick} ><BiHappy size={32} /></animated.div>
          <ul className={Examples.subMenuContainer}>
            <li className={Examples.subMenuItem}>
              <animated.div style={coolAnim} className={Examples.cool}>
                <BiCool size={28} />
              </animated.div>
            </li>
            <li className={Examples.subMenuItem}>
              <animated.div style={shockedAnim} className={Examples.shocked}>
                <BiShocked size={28} />
              </animated.div>
            </li>
            <li className={Examples.subMenuItem}>
              <animated.div style={confusedAnim} className={Examples.confused}>
                <BiConfused size={28} />
              </animated.div>
            </li>
          </ul>
        </animated.li>
        <li className={`${Examples.menuItem} ${Examples.menuTwo}`}>
          <animated.div style={basketAnim} className={Examples.innerMenuItem} onClick={handleBallClick}><BiBasketball size={32} /></animated.div>
          <ul className={Examples.subMenuContainer}>
            <li className={Examples.subMenuItem} >
              <animated.div style={bowlingAnim} className={Examples.bowling}>
                <BiBowlingBall size={28} />
              </animated.div>
            </li>
            <li className={Examples.subMenuItem} >
              <animated.div style={biAnim} className={Examples.bi}>
                <BiBall size={28} />
              </animated.div>
            </li>
            <li className={Examples.subMenuItem} >
              <animated.div style={footballAnim} className={Examples.football}>
                <BiFootball size={28} />
              </animated.div>
            </li>
            <li className={Examples.subMenuItem} >
              <animated.div style={tennisAnim} className={Examples.tennisball}>
                <BiTennisBall size={28} />
              </animated.div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default MenuOpen