import React from "react";
import "./PageContent.js";
function PageFormat(props){
    return(
        <div>
            <div>
              <h1>{props.about}</h1>
              <p>{props.text}</p>
              <h1>{props.itinerary}</h1>
              <h2>{props.Day1}</h2>
              <p>{props.p1}</p>
              <h2>{props.Day2}</h2>
              <p>{props.p2}</p>
              <h2>{props.Day3}</h2>
              <p>{props.p3}</p>
              <h2>{props.Day4}</h2>
              <p>{props.p4}</p>
            </div>
        </div>
    );
}
export default PageFormat;