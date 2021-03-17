import React from 'react';
import "./styles.css";

const Sidebar = () => {
    return (
        <div className="icon-bar">
            <a href="https://twitter.com/home" className="twitter" rel="noreferrer" target="_blank"><i className="fa fa-twitter"></i></a> 
            <a href="https://www.linkedin.com/in/%F0%9F%97%A1%F0%9F%9B%A1-ramon-g-908611199/" className="linkedin" rel="noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>
            <a href="https://www.twitch.tv/achilles5406" className="twitch" rel="noreferrer"  target="_blank"><i className="fa fa-twitch"></i></a> 
            <a href="https://www.instagram.com/rgtercero/" className="instagram" rel="noreferrer"  target="_blank"><i className="fa fa-instagram"></i></a> 
        </div>
    )
}

export default Sidebar;
