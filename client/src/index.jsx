import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import CowList from "./CowList.jsx";
import NewCow from "./NewCow.jsx";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowList: []
    }
  }

  componentDidMount() {
    axios.get('/api/cows')
    .then((res) => {
      this.setState({
        cowList: res.data
      });
    })
    .catch((err)=> {
      console.log(err);
    })
  }

  submitNewCow(newcow) {
    axios.post('/api/cows', newcow)
      .then(() => axios.get('/api/cows'))
      .then((res) => {
        this.setState({
          cowList: res.data
        });
      })
      .catch((err) => {
        console.log(err);
        throw new Error(err);
      })
  }

  render() {
    return (
    <div>
      <div>
        <CowList cows={this.state.cowList}/>
      </div>
      <div>
        <NewCow submitNewCow={this.submitNewCow.bind(this)}/>
      </div>
    </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);