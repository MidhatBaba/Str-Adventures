import React from "react";
import "./Content.js";
import "./Card.css";
import { Link } from "react-router-dom"
// Called every time when each card is created
function Card(props){
    return(
        <div>
          <Link to={props.url}>
              <div className="card_div">
                 <h1 className="card_text">{props.name}</h1>
                 <img className="pic" src={props.img}/> 
              </div>
          </Link>
        </div>
    );
}
export default Card;
