import Motion from '../styles/Motion.module.css'

const PageLayout = ({ nav, sidemenu, main, footer }) => {
  return (
    <div className={Motion.layout}>
      {nav}
      <div className={Motion.bodyContent}>
        {sidemenu}
        {main}
      </div>
      {footer}
    </div>
  )
}

export default PageLayout