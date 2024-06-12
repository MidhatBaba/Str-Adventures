import React from "react";
import "./Content.js";
import "./Card.css";
// Called every time when each card is created
function Card(props){
    return(
        <div>
              <div className="card_div">
                 <h1 className="card_text">{props.name}</h1>
                 <img className="pic" src={props.img}/> 
              </div>
        
        </div>
    );
}
export default Card;