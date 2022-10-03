import React from 'react';
import { sideIcons, sidebarButtons } from "./data/data";

const Sidebar = ({ show, onClick }) => {
    const listIcons = sideIcons.map(icon =>
        <li onClick={() => console.log('Clicking!')} key={icon.id} className='side-item'>
            <a href="#" className="side-link" tabIndex="-1">
                {icon.name}
            </a>
        </li>
    );

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
                {listIcons}
                {sidebarButtons}
            </ul>
        </nav>
    )
}

export default Sidebar;