import Motion from '../styles/Motion.module.css'

const Sidemenu = () => {
  return (
    <div className={Motion.sideMenu}>
      <ul className={Motion.menuPrimary}>
        <li>
          <h4>Introduction</h4>
          <ul className={Motion.menuSecondary}>
            <li>About</li>
            <li>Principles</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Sidemenu