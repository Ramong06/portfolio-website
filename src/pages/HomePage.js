import React from 'react'
import { Link } from "react-router-dom";

const Resume = () => {
    return (
        <div>
            <h1>THIS IS MY RESUME PAGE</h1>
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    )
}

export default Resume
