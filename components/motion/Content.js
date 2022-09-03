import { useState, useEffect } from 'react'

import Motion from '../../styles/Motion.module.scss'
import Header from '../motion/Header'
import Section from '../motion/Section'
//Principles
import Principle from '../motion/Principle'
import SpinnerCircle from './components/SpinnerCircle'
import SwitchLightDark from './components/SwitchLightDark'
import MenuOpen from './components/MenuOpenSampleCrazy'
//Why Spring 
import WhySpring from './WhySpring'
import SpringPropsDemo from './components/SpringPropsDemo'
//Animation Types


import BestPractice from './BestPractice'
import Microanimation from './components/SpringPropsDemo'


const Content = () => {

  const [ball, setBall] = useState('')
  const [emoji, setEmoji] = useState('translate')

  useEffect(()=> {
    console.log(emoji)
  }, [ball, setBall, emoji, setEmoji])

  return (
    <div className={Motion.motion}>
      <Header />
      <Section
        id="principles"
        title="Motion Principles"
        subtitle="These principles guides the direction of how motion are implemented in the UI. It serves as a direction for designers to follow when implementing motion within the design system.">
        <Principle
          id="seamless"
          title="Seamless"
          paragraph="The nature of the movement feels natural and intuitive to the user. The motion should be fluid and reflect real-world characteristics in aiding the continous flow of actions. Seamless movement maintains the focus on the task at hand by reducing friction between states through mitigating distractions and abrupt changes."
          example={<SpinnerCircle />}
          label={"Loop Demo: Spinner (Indeterminate)"}
        />
        <Principle
          id="engaging"
          title="Engaging"
          paragraph="The motion serves to direct and highlight important detail by creating emotional appeal. An engaging motion design creates a delightful experience and give the user an impression of direct manipulation. An engaging experience reduces frustration by communicating status and help user to see the result of their actions."
          example={<SwitchLightDark />}
          label={"Interactive: Toggle Switch"}
        />
        <Principle
          id="assistive"
          title="Assistive"
          paragraph="Motion plays a supportive role of enhancing and improving usability. Motion is primarily implemented to provide context and communicates feedback to the user. Assistive motion reduces cognitive load and minimise mental effort to use a product."
          example={<MenuOpen changeEmoji={setEmoji} changeBall={setBall} />}
          label={"Interactive: Simple Menu"} />
      </Section>
      <Section
        id="why"
        title="Why Spring Animations">
        <WhySpring
          id="spring"
          description={
            <>
              <p>
                Unlike linear animations that rely on easing function and duration, spring animation mimics movement using spring physics that is defined by properties such as mass, tension and friction. The outcome of physics-based animation gives the impression of how physical objects move in space and feel very natural in comparison to ease-based animation. Spring animations are interruptible and adapt to changes, making them more intuitive and useful for UI animations in comparison to ease-based animations.
              </p>
              <p>
                Spring animations are widely adopted in native apps on Android and iOS. Physics-based animation frameworks are also becoming increasingly popular on web due to its flexibility and powerful interpolation to create life-like animation. With spring animation, movements look and feel natural by default. Consistency of motion becomes easier to manage and promote fluid interactivity.
              </p>
              <p>
                Click <a rel="noreferrer" href="https://medium.com/kaliberinteractive/how-i-transitioned-from-ease-to-spring-animations-5a09eeca0325" target="_blank">here</a> to find out more about spring animation
                <br />
                Click <a rel="noreferrer" href="https://www.digitalocean.com/community/tutorials/react-intro-to-react-spring" target="_blank">here</a> to learn about React Spring framework
              </p>
            </>
          }
          example={<SpringPropsDemo type={emoji} />}
          label={"Spring Props"}/>
      </Section>
      <Section
        id="types"
        title="Types of Animation">
        <Principle
          id="microinteraction"
          title="Microinteraction"
          paragraph="Micro-interaction animation is a small functional animation that triggers a visual feedback immediately upon an action."
          example={<Microanimation />}
          label={"Loop Demo: Spinner (Indeterminate)"} />
        <Principle
          id="loading"
          title="Loading and Progress"
          paragraph="Loading and progress animation informs the user through visual representation of where they are in the process and what&apos;s happening. Loading animation assures the user that the content is still being loaded despite the page looking empty."

          label={"Loop Demo: Spinner (Indeterminate)"} />
        <Principle
          id="state"
          title="State Change"
          paragraph="State change animation eases the sudden and abrupt UI change by creating a visual link and spatial relationship from its initial state to final state."

          label={"Loop Demo: Spinner (Indeterminate)"} />
        <Principle
          id="structure"
          title="Structure and Navigation"
          paragraph="Navigational animation shows where the user is currently at by providing context through movements."

          label={"Loop Demo: Spinner (Indeterminate)"} />
      </Section>
      <Section
        id="practices"
        title="Best Practice"
        subtitle="Common mistakes to avoid while implementing motion in UI design.">
        <BestPractice
          title="Reactive and interruptible"
          description="Reactive animation perceive a sense of control and performance to the user. The animation does not have to run its course before the user can interact with the interface."
          id="reactive"
          doo="Motion can be paused or reversed between states at any time."
          dooExample={"reactiveMotion"}
          dont="Motion is non-responsive during the animation or start/stop abruptly."
          dontExample={"!reactiveMotion"}
        />
        <BestPractice
          title="Swift and nimble"
          description="Animation should be fast to keep the interface movements subtle and unobtrusive to the user. Designers should aim to minimise drag and bounce to keep the interface light for encouraging interaction."
          id="swift"
          doo="Motion that animates swiftly between states that is subtle yet noticable."
          dooExample={"swiftMotion"}
          dont="Motion that is too fast or too long."
          dontExample={"!swiftMotion"}
        />
        <BestPractice
          title="Natural and intuitive"
          description="Interface element should behave and move like real-world objects. The effects of the animation should feel natural and support the essence of real interaction. User can feel disoriented when movements defy physical laws."
          id="natural"
          doo="Motion that moves accordingly to natural behavior."
          dooExample={"intuitiveMotion"}
          dont="Motion that moves in a manner that is unexpected and unfamiliar."
          dontExample={"!intuitiveMotion"}
        />
        <BestPractice
          title="Cancelling and stopping (when necessary)"
          description="In some occassions such as page loading, designers can consider cancelling a mid course loading animation to reduce unnecessary waiting time so the page can be rendered immediately."
          id="cancelling"
          doo="Motion can be paused or reversed between states at any time."
          dooExample={"cancellableMotion"}
          dont="Motion non-responsive during the animation or start/stop abruptly."
          dontExample={"!cancellableMotion"}
        />
      </Section>
    </div>
  )
}

export default Content