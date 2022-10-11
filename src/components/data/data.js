import { BsHouseDoor, BsSpeedometer2, BsCalendar, BsInboxes } from 'react-icons/bs';
import Button from '../button';
import logo from '../../blank.png';

const navbarItems = [{
    item: <img src={logo} alt="The logo which is a magnifying glass with the word 'Schema' next to it." className="logo" />,
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
    id: 0
}, {
    name: 'Dashboard',
    id: 1
}, {
    name: 'Calendar',
    id: 2
}, {
    name: 'Theme',
    id: 4
}, {
    name: <Button content="login">Login</Button>,
    id: 5
}, {
    name: <Button content="courses">Courses</Button>,
    id: 6
}]

export { navbarItems, sideIcons };