import {Link, Route, Switch} from 'react-router-dom';
import React from 'react';
import Category from './Category';
import Hola from './Hola'
import PruebaAPI from './PruebaAPI'
import { BrowserRouter } from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            <ul>
                <li><Link to='/category'><span>Category</span></Link></li>
                <li><Link to='/hola'><span>Saludo</span></Link></li>
            </ul>
            <Switch>
                <Route path="/category">
                    <PruebaAPI />
                </Route>
                <Route path="/hola">
                    <Hola />
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default SideBar;