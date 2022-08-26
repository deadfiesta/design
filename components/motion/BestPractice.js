import { useRef, useState, useEffect } from 'react'
import Motion from '../../styles/Motion.module.scss'

const BestPractice = ({ id, title, description, doo, dooExample, dont, dontExample }) => {
  const item = useRef(null)
  const num = useRef(null)
  const [number, setNumber] = useState(null)
  useEffect(()=> {
    num && setNumber(Number(1 + Array.from(item.current.parentNode.children).indexOf(item.current)))
  })
  return (
    <div ref={item} className={Motion.bestPractice}>
      <div id={id} className={Motion.anchor} />
      <h3>{number}. {title}</h3>
      <p>{description}</p>
      <ul className={Motion.bestPracticeContainer}>
        <li className={`${Motion.doo} ${Motion.doDontContainer}`}>
          <div className={Motion.exampleContainer}>
            {dooExample}
          </div>
          <hr className={Motion.doDontBar} />
          <h4>Do</h4>
          <p>{doo}</p>
        </li>
        <li className={`${Motion.dont} ${Motion.doDontContainer}`}>
          <div className={Motion.exampleContainer}>
            {dontExample}
          </div>
          <hr className={Motion.doDontBar} />
          <h4>Don't</h4>
          <p>{dont}</p>
        </li>
      </ul>
    </div>
  )
}

export default BestPractice