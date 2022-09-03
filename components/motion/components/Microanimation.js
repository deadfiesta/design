import Examples from '../../../styles/Examples.module.scss'
import { useState, useRef, useEffect } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { animated, useTrail, useSpring, useTransition } from 'react-spring'

const StarHover = ({ ref, star, hover, setHover, clicked, setClick }) => {

  const { transform, opacity } = useSpring({
    transform: hover >= star ? [1, 0] : [0, -45],
    opacity: hover >= star ? 1 : 0,
    config: { tension: 200, friction: 14, mass: .5 },
    ref: ref
  })

  return (
    <div className={Examples.starContainer} star={star} onClick={(e) => Number(star) === 1 && Number(clicked) === 1 ? setClick(0) : setClick(e.currentTarget.getAttribute("star"))} onPointerOver={(e) => setHover(e.currentTarget.getAttribute("star"))} onPointerOut={() => setHover(null)} >
      <div className={Examples.starBgContainer}>
        <div className={Examples.dot} />
      </div>
      <div className={Examples.starHoverContainer}>
        <animated.div className={ Number(hover) === 1 ? `${Examples.starHover} ${Examples.starRed}` : Number(hover) === 2 ? `${Examples.starHover} ${Examples.starOrange}` : Number(hover) === 3 ? `${Examples.starHover} ${Examples.starYellow}` : Number(hover) === 4 ? `${Examples.starHover} ${Examples.starGreen}` : `${Examples.starHover}`} style={{
          transform: (transform).to((s, r) => `scale(${s}) rotate(${r}deg)`),
          opacity: opacity
        }}>
          <AiOutlineStar size={28} />
        </animated.div>
      </div>
      <div className={Examples.starActiveContainer}>
        <div className={Examples.starActive}>
          {/* <AiFillStar size={28} /> */}
        </div>
      </div>
    </div>
  )
}

const Microanimation = () => {

  const [hoveredOn, setHoveredOn] = useState(0)
  const [clickedOn, setClickedOn] = useState(0)

  //Star States

  const [starOne, setStarOne] = useState(false)
  const [starTwo, setStarTwo] = useState(false)
  const [starThree, setStarThree] = useState(false)
  const [starFour, setStarFour] = useState(false)
  const [starFive, setStarFive] = useState(false)

  const transform = {
    t: {
      from: [0, 0, 0],
      enter: [1, 0, 0],
      leave: [.5, 0, 45]
    },
    o: {
      from: 1,
      enter: 1,
      leave: 0
    },
    delay: 25,
    config: {
      tension: 160, friction: 14, mass: .75
    }
  }

  const starOneTransit = useTransition(starOne, {
    from: { transform: transform.t.from, opacity: transform.o.from },
    enter: { transform: transform.t.enter, opacity: transform.o.enter },
    leave: { transform: transform.t.leave, opacity: transform.o.leave },
    config: transform.config

  })
  const starTwoTransit = useTransition(starTwo, {
    from: { transform: transform.t.from, opacity: transform.o.from },
    enter: { transform: transform.t.enter, opacity: transform.o.enter, delay: transform.delay * 1},
    leave: { transform: transform.t.leave, opacity: transform.o.leave },
    config: transform.config
    
  })

  const starThreeTransit = useTransition(starThree, {
    from: { transform: transform.t.from, opacity: transform.o.from },
    enter: { transform: transform.t.enter, opacity: transform.o.enter, delay: transform.delay * 2 },
    leave: { transform: transform.t.leave, opacity: transform.o.leave },
    config: transform.config
  })

  const starFourTransit = useTransition(starFour, {
    from: { transform: transform.t.from, opacity: transform.o.from },
    enter: { transform: transform.t.enter, opacity: transform.o.enter, delay: transform.delay * 3 },
    leave: { transform: transform.t.leave, opacity: transform.o.leave },
    config: transform.config
  })

  const starFiveTransit = useTransition(starFive, {
    from: { transform: transform.t.from, opacity: transform.o.from },
    enter: { transform: transform.t.enter, opacity: transform.o.enter, delay: transform.delay * 4 },
    leave: { transform: transform.t.leave, opacity: transform.o.leave },
    config: transform.config
  })

  const width = useRef(null)
  const [activeWidth, setActiveWidth] = useState(0)

  const starTrail = useTrail(5, {
    from: { transform: [0, -45], opacity: 0 },
    transform: [1, 0],
    opacity: 1
  })

  const STARS = [
    {
      transit: starOneTransit,
      item: starOne
    },
    {
      transit: starTwoTransit,
      item: starTwo
    },
    {
      transit: starThreeTransit,
      item: starThree
    },
    {
      transit: starFourTransit,
      item: starFour
    },
    {
      transit: starFiveTransit,
      item: starFive
    }
  ]

  useEffect(() => {
    switch (Number(clickedOn)) {
      case 0:
        setStarOne(false)
        setStarTwo(false)
        setStarThree(false)
        setStarFour(false)
        setStarFive(false)
      case 1:
        setStarOne(true)
        setStarTwo(false)
        setStarThree(false)
        setStarFour(false)
        setStarFive(false)
        break
      case 2:
        setStarOne(true)
        setStarTwo(true)
        setStarThree(false)
        setStarFour(false)
        setStarFive(false)
        break
      case 3:
        setStarOne(true)
        setStarTwo(true)
        setStarThree(true)
        setStarFour(false)
        setStarFive(false)
        break
      case 4:
        setStarOne(true)
        setStarTwo(true)
        setStarThree(true)
        setStarFour(true)
        setStarFive(false)
        break
      case 5:
        setStarOne(true)
        setStarTwo(true)
        setStarThree(true)
        setStarFour(true)
        setStarFive(true)
    }

  }, [clickedOn, starOne, setStarOne, starTwo, setStarTwo, starThree, setStarThree, starFour, setStarFour, starFive, setStarFive])

  useEffect(() => {
    setActiveWidth(width.current.offsetWidth)
  }, [width, activeWidth, setActiveWidth])

  return (
    <div className={`${Examples.example} ${Examples.microanimation}`}>
      <div className={Examples.starCentering}>
        <ul className={Examples.starContainerList} style={{ zIndex: 10, pointerEvents: 'none', width: activeWidth }}>
          {STARS.map((star, i, key) => clickedOn !== 0 && (
            <div key={`key${i}${key}`}>
              {star.transit(({ transform, opacity }, item, key) => item && (
                <li key={`${i}${key}`}>
                  <div className={Examples.starActiveContainer} >
                    <animated.div style={{
                      transform: (transform).to((s, y, r) => `scale(${s}) translateY(${y}px) rotate(${r}deg)`),
                      opacity: opacity
                    }} className={Number(clickedOn) === 1 ? `${Examples.starActive} ${Examples.starRed}` : Number(clickedOn) === 2 ? `${Examples.starActive} ${Examples.starOrange}` : Number(clickedOn) === 3 ? `${Examples.starActive} ${Examples.starYellow}` : Number(clickedOn) === 4 ? `${Examples.starActive} ${Examples.starGreen}` : `${Examples.starActive}`}>
                      <AiFillStar size={28} />
                    </animated.div>
                  </div>
                </li>
              ))}
            </div>
          ))}
        </ul>
        <ul ref={width} className={Examples.starContainerList}>
          {starTrail.map(({ transform, opacity }, i, key) => (
            <li key={`${i}trailing${key}`}>
              <StarHover hover={hoveredOn} clicked={clickedOn} setClick={setClickedOn} setHover={setHoveredOn} star={i + 1} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Microanimation