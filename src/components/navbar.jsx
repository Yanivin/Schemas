import React from 'react';
import { navbarItems } from "./data/data";
import { useMediaQuery } from 'react-responsive'

const Navbar = ({ onClick }) => {
    const isMediumScreen = useMediaQuery({ query: '(max-width: 768px)' })

    let listItems = navbarItems.map(element =>
        <li className='nav-item' key={element.id}>
            <a href="#" className="nav-link">
                {element.item}
            </a>
        </li>
    );

    isMediumScreen ? listItems = listItems.slice(0, 1) : listItems = listItems;

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