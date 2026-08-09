import React from "react";

function Cards(props){

   return(
    <div>
        <input type="text" onChange={(e) => props.setname(e.target.value)            
        } />
        <p>Hi my name is Toheed Rehman basically i am from kamber city {props.name}</p>
    

    </div>
   )
}

export default Cards;