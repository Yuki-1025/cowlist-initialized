import React from "react";

class NewCow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      newCow: {
        id: null,
        name: null,
        description: null
      }
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    var newcow = {};
    newcow.id = e.target[1].value;
    newcow.name = e.target[2].value;
    newcow.description = e.target[3].value;
    // console.log('button was clicked!')
    // console.log(e.target[3].value);
    this.props.submitNewCow(newcow);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <label>
            <p>ID</p>
            <input name='id' ></input>
          </label>
          <label>
            <p>Name</p>
            <input name='name' ></input>
          </label>
          <label>
            <p>Description</p>
            <input name='description' ></input>
          </label>
        </fieldset>

        <button type='submit' >Submit</button>
      </form>
    )
  }
}

export default NewCow;