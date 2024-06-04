import React from "react";
import Card from "./Card";
import Content from "./Content";
function Need(){
    function createCard(cont){
        return <Card 
        key={cont.id}
        name={cont.name} 
        img={cont.image}/>
    }
    return(
        <div>
            const cardCreated=Content.map(createCard);
        </div>
    );
}
export default Need;