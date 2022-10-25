import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="App">
            <Link to="/Home">Home</Link>
            <hr />
            <Link to="/Login">Login</Link>
            <hr />
            <Link to=":beka">Signup</Link>
        </div>
    )
}

export default Header;