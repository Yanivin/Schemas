import React from 'react';
import { sideIcons } from "./data/data";
import { useMediaQuery } from 'react-responsive'

const Sidebar = ({ show, onClick }) => {
    const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' })

    let listItems = sideIcons.map(item =>
        <li  className='side-item' onClick={() => console.log('Clicking!')} key={item.id}>
            <a href="#" className="side-link">
                {item.name}
            </a>
        </li>
    );

    isLargeScreen ? listItems = listItems.slice(0, 4) : listItems = listItems;

    return (
        <nav className={show ? 'sidebar' : 'sidebar active'}>
            <ul className="sidebar-nav">
                <li className='side-item' onClick={onClick}>
                    <hr className='row bar-1'>
                    </hr>
                    <hr className='row bar-2'>
                    </hr>
                    <hr className='row bar-3'>
                    </hr>
                </li>
                {listItems}
            </ul>
        </nav>
    )
}

export default Sidebar;