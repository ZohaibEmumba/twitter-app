import { Menu } from 'antd';
import { FaBolt, FaLaptop, FaPhoneAlt, FaPooStorm, FaReceipt, FaSortAmountUpAlt, FaTv, FaWpforms } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MenuWrapper } from './style';


export const menu = (
    <MenuWrapper>
        <Menu.Item key="0" className='padding'>
            <Link to="/" className='link-padding'>
                <FaWpforms className='icon' />
                <span>Topics</span>
            </Link>
        </Menu.Item>
        <Menu.Item key="1" className='padding'>
            <Link to="/" className='link-padding'>
                <FaPooStorm className='icon' />
                <span>Moment</span>
            </Link>
        </Menu.Item>
        <Menu.Item key="2" className='padding'>
            <Link to="/" className='link-padding'>
                <FaReceipt className='icon' />
                <span>Newsletter</span>
            </Link>
        </Menu.Item>
        <Menu.Item key="3" className='padding'>
            <Link to="/" className='link-padding'>
                <FaBolt className='icon' />
                <span>Twitter For Professionals</span>
            </Link>
        </Menu.Item>
        <Menu.Item key="4" className='padding'>
            <Link to="/" className='link-padding'>
                <FaTv className='icon' />
                <span>Twitter Adds</span>
            </Link>
        </Menu.Item>
        <Menu.Item key="5" className='padding'>
            <Link to="/" className='link-padding'>
                <FaSortAmountUpAlt className='icon' />
                <span>Analytics</span>
            </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="6" className='padding'>
            <Link to="/" className='link-padding'>
                <FaSortAmountUpAlt className='icon' />
                <span>Setting and Privacy</span>
            </Link>
        </Menu.Item>
        <Menu.Item key="7" className='padding'>
            <Link to="/" className='link-padding'>
                <FaPhoneAlt className='icon' />
                <span>Help center</span>
            </Link>
        </Menu.Item>
        <Menu.Item key="8" className='padding'>
            <Link to="/" className='link-padding'>
                <FaLaptop className='icon' />
                <span>Display</span>
            </Link>
        </Menu.Item>
    </MenuWrapper>
);
