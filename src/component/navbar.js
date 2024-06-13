import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="font-poppins">
            <ul className="flex justify-between mx-9 my-10 text-black transition-all cursor-pointer">
                <li className="hover:font-bold text-sm transition-all"><p>SHOP</p></li>
                <li className="hover:font-bold text-sm text-rose-500 transition-all"><p>SPRING SALES</p></li>
                <li className="hover:font-bold text-sm transition-all"><p>INFO</p></li>
                <li className="hover:font-bold text-sm transition-all"><p>CONTACT</p></li>
            </ul>
        </div>
    )
}

export default Navbar