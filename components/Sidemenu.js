import Motion from '../styles/Motion.module.scss'

const Sidemenu = () => {
  return (
    <div className={Motion.sideMenu}>
      <ul className={Motion.menuPrimary}>
        <li>
          <h4><a rel="noreferrer" href="#principles">Motion Principles</a></h4>
          <ul className={Motion.menuSecondary}>
            <li><a rel="noreferrer" href="#seamless">Seamless</a></li>
            <li><a rel="noreferrer" href="#engaging">Engaging</a></li>
            <li><a rel="noreferrer" href="#assistive">Assistive</a> </li>
          </ul>
        </li>
        <li>
          <h4><a rel="noreferrer" href="#why">Why Spring Animations</a></h4>
        </li>
        <li>
          <h4><a rel="noreferrer" href="#types">Types of Animation</a></h4>
          <ul className={Motion.menuSecondary}>
            <li><a rel="noreferrer" href="#microinteraction">Microinteraction</a></li>
            <li><a rel="noreferrer" href="#loading">Loading and Progress</a></li>
            <li><a rel="noreferrer" href="#state">State Change</a></li>
            <li><a rel="noreferrer" href="#structure">Structure and Navigation</a></li>
          </ul>
        </li>
        <li>
          <h4><a rel="noreferrer" href="#types">Best Practices</a></h4>
          <ul className={Motion.menuSecondary}>
            <li><a rel="noreferrer" href="#reactive">Reactive and interruptible</a></li>
            <li><a rel="noreferrer" href="#swift">Swift and nimble</a></li>
            <li><a rel="noreferrer" href="#natural">Natural and intuitive</a></li>
            <li><a rel="noreferrer" href="#cancelling">Cancelling and stopping</a></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Sidemenu