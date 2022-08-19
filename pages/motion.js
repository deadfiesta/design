import PageLayout from '../components/PageLayout'
import Navbar from '../components/Navbar'
import Content from '../components/motion/Content'

const motion = () => {
  return (
    <PageLayout
    nav={<Navbar />} 
    main={<Content />} />
  )
}

export default motion