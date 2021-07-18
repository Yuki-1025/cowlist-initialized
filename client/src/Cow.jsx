import React from "react";

function Cow (props) {

  // handleSelect(e) {
  //   console.log('THIS IS EVENT ', e.target.dataset.user);
  //   this.props.selectCow(e.target.value);
  // }


  return (

    <li className="cow-name" onClick={() => props.selectCow(props.cow)}>{props.cow.name}</li>


  )

};

export default Cow;

//this.props.cow.name