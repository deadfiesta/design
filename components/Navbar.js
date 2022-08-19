import Motion from '../styles/Motion.module.css'
import Logo from '../components/svg/SeaLogo'

const Navbar = () => {
  return (
    <nav>
      <ul className={Motion.nav}>
        <li className={Motion.branding}><Logo /></li>
        {["Home", "Design", "Developer", "Resources"].map((menu, i) => (
          <div className={ menu === "Home" ? Motion.active : "menuItem"} key={menu+i}>{menu}</div>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar