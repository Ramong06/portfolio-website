import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>THIS IS MY HOME PAGE</h1>
            <Link to="/resume">
                <button>Resume</button>
            </Link>
        </div>
    );
}

export default Home;
