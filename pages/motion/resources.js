import PageLayout from '../../components/PageLayout'
import Navbar from '../../components/Navbar'

const resources = () => {
  return (
    <PageLayout
      nav={<Navbar current={'Resources'}/>}
      main={<div style={{ display: "grid", placeItems: "center", width: "100%", height: "100vh" }}><h1>Resources</h1></div>} />
  )
}

export default resources