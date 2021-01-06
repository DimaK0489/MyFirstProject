import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";


function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={"/profile"}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/dialogs"}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;