import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
    return (
        <div className='text-center'>
            <nav>
                <Link to="/"><h1>ShopBridge</h1>
                </Link>
            </nav>
        </div>
    )
}

export default Nav;