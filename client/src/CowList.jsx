import React from "react";
import Cow from "./Cow.jsx";

function CowList (props) {

  return (
    <ul>
      {props.cows.map((cow, i) => {
        return <Cow key={i} cow={cow} />
      })}
    </ul>
  )
};

export default CowList;