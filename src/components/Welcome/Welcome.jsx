import React from 'react';
import {Link} from "react-router-dom";
// import './Welcome.scss';

export default () =>
    <div className="Container">
        <h1 className="text-light text-center" id="title">
            <span className="text-alert">Chuck Norris</span> App
        </h1>

        <div className="text-center m-m">
            <Link to="/list" className="btn-alert" id="enter">Entrar</Link>
        </div>
    </div>
