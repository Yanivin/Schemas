import React from 'react';
import { navbarItems } from "./data/data";

const Navbar = ({ onClick }) => {
    const listItems = navbarItems.map(element =>
        <li className='nav-item' key={element.id}>
            <a href="#" className="nav-link">
                {element.item}
            </a>
        </li>
    );

    return (
        <nav className="navbar">
            <ul className='navbar-nav'>
                {listItems}
                <li className='nav-item'>
                    <a className='nav-link' href="#" onClick={onClick}>
                        <hr className='row bar-1'>
                        </hr>
                        <hr className='row bar-2'>
                        </hr>
                        <hr className='row bar-3'>
                        </hr>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;