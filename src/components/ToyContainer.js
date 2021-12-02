import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {
  // console.log("TOYS in ToyContainer", toys) //toys is an arr of obj
  return (
    <div id="toy-collection">{
      /* Render the collection of ToyCards */
      toys.map(toyObj => 
        <ToyCard key={toyObj.id} toy={toyObj}/>
      )
    }</div>
  );
}

export default ToyContainer;
