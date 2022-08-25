import Motion from '../../styles/Motion.module.css'
import Header from '../motion/Header'
import Section from '../motion/Section'
import Principle from '../motion/Principle'
import WhySpring from './WhySpring'

const Content = () => {
  return (
    <div className={Motion.motion}>
      <Header />
      <hr />
      <Section
        title="Motion Principles"
        subtitle="These principles guides the direction of how motion are implemented in the UI. It serves as a direction for designers to follow when implementing motion within the design system.">
        <Principle
          id="seamless"
          title="Seamless"
          paragraph="The nature of the movement feels natural and intuitive to the user. The motion should be fluid and reflect real-world characteristics in aiding the continous flow of actions. Seamless movement maintains the focus on the task at hand by reducing friction between states through mitigating distractions and abrupt changes." />
        <Principle
          id="engaging"
          title="Engaging"
          paragraph="The motion serves to direct and highlight important detail by creating emotional appeal. An engaging motion design creates a delightful experience and give the user an impression of direct manipulation. An engaging experience reduces frustration by communicating status and help user to see the result of their actions." />
        <Principle
          id="assistive"
          title="Assistive"
          paragraph="Motion plays a supportive role of enhancing and improving usability. Motion is primarily implemented to provide context and communicates feedback to the user. Assistive motion reduces cognitive load and minimise mental effort to use a product." />
      </Section>
      <hr />
      <Section
        title="Why Spring Animations">
          <WhySpring
          id="spring"
          paragraph="" />
      </Section>
    </div>
  )
}

export default Content