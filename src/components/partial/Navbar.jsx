import React from 'react';
import './navbar.scss';
import {withRouter} from 'react-router-dom'

const Navbar = ({history}) => (
    <div className="NavbarComponent p-x" id="navbar">
        <div id="goBack"><button onClick={history.goBack}>{ '<' }</button></div>
        <h5 className="text-light text-center">Chuck Norris Jokes</h5>
    </div>
)

export default withRouter(Navbar)