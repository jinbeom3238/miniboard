import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="Header">
                <Link to="/">
                    <img src="./imgs/miniboardPic.png" />
                </Link>
            </div>
        </header>
    );
};
export default Header;