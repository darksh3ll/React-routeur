import React, { Component } from 'react';
import './App.css';
import {Route,BrowserRouter,Switch,NavLink} from "react-router-dom";
import Home from "./Home"
import Contact from "./Contact"
import NotFound from "./NotFound"
import History from "./History"

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <div className="nav">
                    <NavLink exact to="/" activeClassName="selected">Acceuil</NavLink>
                    <NavLink exact to="/Contactez-nous" activeClassName="selected">Contact</NavLink>
                    <NavLink exact to="/History" activeClassName="selected">History</NavLink>
                </div>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Contactez-nous" component={Contact}/>
                    <Route path="/History" component={History}/>
                    <Route path="/" component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>



    );
  }
}

export default App;
