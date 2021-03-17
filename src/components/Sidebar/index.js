import React from 'react';
import "./styles.css";

const Sidebar = () => {
    return (
        <div className="icon-bar">
            <a href="#" className="facebook"><i className="fa fa-facebook"></i></a> 
            <a href="#" className="twitter"><i className="fa fa-twitter"></i></a> 
            <a href="#" className="google"><i className="fa fa-google"></i></a> 
            <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
            <a href="#" className="youtube"><i className="fa fa-youtube"></i></a> 
            <a href="#" className="twitch"><i className="fa fa-twitch"></i></a> 
        </div>
    )
}

export default Sidebar;
