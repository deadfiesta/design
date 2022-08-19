import Motion from '../../styles/Motion.module.css'

const Header = () => {
  return (
    <header className={Motion.title}>
      <h1>Motion Guidelines</h1>
      <p>Motion in UI guides and respond to the user. Motion design enhances and faciliates the connection between actions and expected reactions on the user side. It drives user’s attention to particular object and hints at what will happen with each action performed by the user.</p>
      <a href="https://wenkiong.com/motion/" target="_blank" rel="noreferrer">Motion Website</a>
    </header>
  )
}

export default Header