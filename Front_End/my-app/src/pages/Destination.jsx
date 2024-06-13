import { useEffect, useState } from "react"
import Nav from "../components/Nav/Nav.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { useParams } from 'react-router-dom'
import PageContent from "../components/PageComponent/PageContent.js"

const Destination = () => {
  const { url } = useParams();
  const [ currentPageContent, setCurrentPageContent ] = useState(undefined)

  useEffect( () => {
    const data = PageContent.find( f => f.url == url)
    setCurrentPageContent(data)
  }, [ url ])

  if (!currentPageContent) return <h1>Page not found</h1>

  return currentPageContent && (
    <div>
      <Nav />
      <div>
        <h1>{ currentPageContent.title }</h1> 
        <h6>{ currentPageContent.description }</h6> 
      </div>
      <Footer />
    </div>
  )
}

export default Destination;
