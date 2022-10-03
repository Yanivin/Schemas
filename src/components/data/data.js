import { BsHouseDoor, BsSpeedometer2, BsCalendar, BsInboxes } from 'react-icons/bs';
import Button from '../button';
import logo from '../../brand.png';

const sidebarButtons = 
    <>
        <li className='side-item' >
            <a href="#" className="side-link">
                <Button content="login">Login</Button>
            </a>
        </li>
        <li className='side-item'>
            <a href="#" className="side-link">
                <Button content="courses">Courses</Button>
            </a>
        </li>
    </>

const navbarItems = [{
    item: <img className="logo" src={logo} alt="logo" />,
    id: 0
}, {
    item: <Button content="login">Login</Button>,
    id: 1
}, {
    item: <Button content="courses">Courses</Button>,
    id: 2
}];

const sideIcons = [{
    name: 'Home',
    icon: <BsHouseDoor />,
    id: 0
}, {
    name: 'Dashboard',
    icon: <BsSpeedometer2 />,
    id: 1
}, {
    name: 'Calendar',
    icon: <BsCalendar />,
    id: 2
}, {
    name: 'Inbox',
    icon: <BsInboxes />,
    id: 3
}]

export { navbarItems, sideIcons, sidebarButtons };