import React from "react";
import Card from "../CardsComponent/Card";
import Content from "../CardsComponent/Content";
import "./Destination.css";
function Destination(){
    const selectCards= Content.slice(0,4);
    function createCard(cont){
        return <Card 
        key={cont.id}
        img={cont.image}
        name={cont.name}/>
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
