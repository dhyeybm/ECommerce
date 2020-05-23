import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Switch,Route,Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import AppNavbar from "./AppNavbar.js";
import List from "./List.js";
import Cart from "./Cart.js";

class Main extends Component {
    

        
    render() { 
        return (
            <div>
                <AppNavbar/>
                <Switch>
                    <Route exact path='/' component={() => <List/>}/>
                    <Route exact path='/cart' component={()=><Cart/>}/>
                </Switch>
            </div>
        );
    }
}
 
export default Main
