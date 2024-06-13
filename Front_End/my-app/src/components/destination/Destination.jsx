import React from "react";
import Card from "../CardsComponent/Card";
import Content from "../CardsComponent/Content";
import { Link } from "react-router-dom";
import "./Destination.css";
function Destination(){
    const selectCards= Content.slice(0,4);
    function createCard(cont){
        return <Card 
        url={cont?.url}
        key={cont.id}
        img={cont.image}
        name={cont.name}>
          <Link to="/tryme" className="card-link">Learn More</Link>
        </Card>    
          
    } 
    return(
        <div>
            <div className="main_div">
            <h1> TOP DESTINATIONS</h1>
                <div className="inner_div">
                   {selectCards.map(createCard)}
               </div>
            </div>
        </div>
    );
}
export default Destination;
