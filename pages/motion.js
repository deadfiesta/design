import PageLayout from '../components/PageLayout'
import Navbar from '../components/Navbar'
import Sidemenu from '../components/Sidemenu'
import Content from '../components/motion/Content'

const motion = () => {
  return (
    <PageLayout
    sidemenu={<Sidemenu />}
    nav={<Navbar />} 
    main={<Content />} />
  )
}

export default motion