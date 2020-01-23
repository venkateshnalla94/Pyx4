import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/Main.css";
import Routes from "./Routes/Routes"
import Button from 'react-bootstrap/Button';
import { text } from '@fortawesome/fontawesome-svg-core';
// function App() {
//   return (
    
    
//     <Routes></Routes>
      
      
//   );
// }
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      default: "",
      input:""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      default: this.state.input
    }));
  }
  handleChange(event) {
    this.setState({input: event.target.value});
  }
  render() {
   
    return (
      <div>
        <div className="row">
          <div className="col-sm-4">
            <input  onChange={this.handleChange} type="text" placeholder="Enter name">
            </input>
          </div>
          <div className="col">
            <Button onClick={this.handleClick}>Update</Button>
          </div>
          <div className="col">
            <h4>{this.state.default}</h4>
          </div>
        </div>
      </div>
    )
  }

}
export default App;
