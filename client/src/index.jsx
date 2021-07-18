import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import CowList from "./CowList.jsx";
import NewCow from "./NewCow.jsx";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowList: [],
      selectedCow: {}
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

  selectCow(selected) {
    console.log(selected);
    // let currentSelect = {};
    // currentSelect.name = selectedname;
    let cows = this.state.cowList;
    // for (var i = 0; i < cows.length; i++) {
    //   if (cows[i].name === selectedname) {
    //     currentSelect.description = cows[i].name;
    //   }
    // }
    this.setState({
      cowList: cows,
      selectedCow: selected
    });
  }
  render() {
    let selected = this.state.selectedCow;
    if (selected) {
      var popup = <div><div>{selected.name}</div><div>{selected.description}</div></div>
    }
    return (
    <div>
      <div>
        {popup}
      </div>
      <div>
        <CowList cows={this.state.cowList} selectCow={this.selectCow.bind(this)}/>
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