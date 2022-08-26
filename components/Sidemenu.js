import Motion from '../styles/Motion.module.scss'

const Sidemenu = () => {
  return (
    <div className={Motion.sideMenu}>
      <ul className={Motion.menuPrimary}>
        <li>
          <h4><a href="#principles">Motion Principles</a></h4>
          <ul className={Motion.menuSecondary}>
            <li><a href="#seamless">Seamless</a></li>
            <li><a href="#engaging">Engaging</a></li>
            <li><a href="#assistive">Assistive</a> </li>
          </ul>
        </li>
        <li>
          <h4><a href="#why">Why Spring Animations</a></h4>
        </li>
        <li>
          <h4><a href="#types">Types of Animation</a></h4>
          <ul className={Motion.menuSecondary}>
            <li><a href="#microinteraction">Microinteraction</a></li>
            <li><a href="#loading">Loading and Progress</a></li>
            <li><a href="#state">State Change</a></li>
            <li><a href="#structure">Structure and Navigation</a></li>
          </ul>
        </li>
        <li>
          <h4><a href="#types">Best Practices</a></h4>
          <ul className={Motion.menuSecondary}>
            <li><a href="#reactive">Reactive and interruptible</a></li>
            <li><a href="#swift">Swift and nimble</a></li>
            <li><a href="#natural">Natural and intuitive</a></li>
            <li><a href="#cancelling">Cancelling and stopping</a></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Sidemenu