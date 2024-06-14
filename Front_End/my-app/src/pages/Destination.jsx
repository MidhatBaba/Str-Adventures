import { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav.jsx";
import Footer from "../components/Footer/Footer.jsx"; 
import Hero from "../components/hero/hero.jsx";
import { useParams } from 'react-router-dom';
import PageContent from "../components/PageComponent/PageContent.js";
/*************************** Plan array **************/
function createPlan(planItem) {
  return (
    <div key={planItem.title}>
      <h3>{planItem.title}</h3>
      <p>{planItem.description}</p>
    </div>
  );
}
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
      <Hero />
      <div>
        <h1>{ currentPageContent.title }</h1> 
        <p>{ currentPageContent.description }</p> 
        {currentPageContent.plan.map(createPlan)}
      </div>
      <Footer />
    </div>
  )
}

export default Destination;
