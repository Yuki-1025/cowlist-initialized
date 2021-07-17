import React from "react";

class Cow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isclicked: false
    }
  }

  render () {
    return (
      <li>{this.props.cow.name}</li>
    )
  }
};

export default Cow;