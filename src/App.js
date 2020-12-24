import React, {Component} from 'react';

import './App.css';
import Logo from './Components/Logo';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Login from './Components/Login';
import Register from "./Components/Register";
import Order from "./Components/Order";
import Getstarted from './Components/Getstarted';
import Search from './Components/Search';
import Loginhome from './Components/Loginhome';
import NoMatch from "./Components/NoMatch";


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      islog:false,
      items:[],
      isloaded: false,
    }
  }

  componentDidMount(){
    fetch("")
    .then(res=> res.json())
    .then(json=>{
      this.setState({
        isloaded:true,
        items: json
      })
     });
  }

  render(){
    // var {isloaded, items}= this.state;
    // if(!isloaded){
    //   return <div> Loading ..... </div>
    // }
    // else {
      return (
        <Router>
          <div className="App">
            <Switch>
                <Route path="/" exact component={Logo}/>
                <Route path="/login"  component={Login}/>
                <Route path="/loginUsername"  component={Loginhome}/>
                <Route path="/Register"  component={Register}/>
                <Route path="/Ordernow" component={Order}/>
                <Route path="/Getstarted" component={Getstarted}/>
                <Route path="/Search"component={Search}/>
                <Route path="/" component={NoMatch} /> 
            </Switch> 
          </div>
        </Router>
      );
    }
  }
// }

export default App;

