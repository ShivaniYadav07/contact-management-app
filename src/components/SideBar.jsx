// import React, { useState } from 'react';
import './SideBar.css';
// import './index.css';

import contact from '../utils/contact-book.png';
import bar from '../utils/bar-chart.png';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import logo from '../assets/logo.png';

export default function Sidebar(props) {
    
    return (
            <div className= "sidebar flex pt-16 flex-col h-screen p-3 bg-white shadow w-60 h-full SideBar">
                <div className="space-y-3">
                    <div className="flex items-center">
                    <Link className="navbar-brand mx-1 mt-2" to="/"><img src={logo} width={42} alt="logo"/></Link>
                        <h2 className="text-xl mt-4 font-bold">Dashboard</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <Link to="/" className="flex items-center p-2 space-x-3 rounded-md font-bold">
                                    <img src={contact} alt="" />
                                    <span>Contacts</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to="/dashboard" className="flex items-center p-2 space-x-3 rounded-md font-bold">
                                    <img src={bar} alt="" />
                                    <span>Charts And Maps</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}

Sidebar.propTypes = {
    title: PropTypes.number,
    abouttext: PropTypes.string
};
