
import Motion from '../styles/Motion.module.scss'
import Logo from '../components/svg/SeaLogo'

const Navbar = ({ current }) => {

  return (
    <nav>
      <ul className={Motion.nav}>
        <li className={Motion.branding}><Logo /></li>
        {[
          { title: "Home", anchor: "" },
          { title: "Design", anchor: "design" },
          { title: "Developer", anchor: "developer" },
          { title: "Resources", anchor: "resources" }
        ].map((menu, i) => (
          <div className={menu.title === current  ? `${Motion.active}` : "menuItem"} key={menu.title + i}> <a href={`/motion/${menu.anchor}`}>{menu.title}</a></div>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar