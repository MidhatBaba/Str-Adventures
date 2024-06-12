import React from "react";
import PageContent from "./PageContent";
import PageFormat from "./PageFormat";
function Try1(){
    const selectPage=PageContent.slice(0,1);
    function createPage(cont){
      return  <PageFormat
        key={cont.id}
        about={cont.about}
        text={cont.text}
        itinerary={cont.itinerary}
        Day1={cont.Day1}
        p1={cont.p1} 
        Day2={cont.Day2}
        p2={cont.p2}
        Day3={cont.Day3}
        p3={cont.p3}
        Day4={cont.Day4}
        p4={cont.p4} 
      />
    }
    return(
        <div>
            <div>
            <h1> TOP DESTINATIONS</h1>
            {selectPage.map(createPage)}
            </div>
        </div>
    );
}
export default Try1;