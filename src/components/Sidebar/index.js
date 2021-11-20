import React from 'react';
import "./styles.css";

const Sidebar = () => {
    return (
        <div className="icon-bar">
            <a href="https://twitter.com/home" className="twitter" rel="noreferrer" target="_blank"><i className="fa fa-twitter"></i></a> 
            <a href="https://www.linkedin.com/in/ramon-g-908611199/" className="linkedin" rel="noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>
            <a href="https://www.twitch.tv/achilles5406" className="twitch" rel="noreferrer"  target="_blank"><i className="fa fa-twitch"></i></a> 
            <a href="https://www.instagram.com/rgtercero/" className="instagram" rel="noreferrer"  target="_blank"><i className="fa fa-instagram"></i></a>
            <a href="https://github.com/Ramong06" className="github" rel="noreferrer"  target="_blank"><i className="fa fa-github"></i></a> 
        </div>
    )
}

export default Sidebar;
