import { Menu } from 'antd';
import { FaRegSadTear} from 'react-icons/fa';
import { IoCodeSlashOutline, IoNewspaperOutline, IoPersonAddOutline, IoPersonRemoveOutline, IoVolumeMuteOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { MenuWrapper } from './style';


export const menu = (
    <MenuWrapper>
        <Menu.Item key="0" className='padding'>
            <Link to="/" className='link-padding'>
                <FaRegSadTear className='icon' />
                <span>Not interested in this Tweet</span>
            </Link>
        </Menu.Item>
        <Menu.Item key="1" className='padding'>
            <Link to="/" className='link-padding'>
                <IoPersonAddOutline className='icon' />
                <span>Follow</span>
            </Link>
        </Menu.Item>
        <Menu.Item key="2" className='padding'>
            <Link to="/" className='link-padding'>
                <IoNewspaperOutline className='icon' />
                <span>Add/remove</span>
            </Link>
        </Menu.Item>
        <Menu.Item key="3" className='padding'>
            <Link to="/" className='link-padding'>
                <IoVolumeMuteOutline className='icon' />
                <span>Mute</span>
            </Link>
        </Menu.Item>
        <Menu.Item key="4" className='padding'>
            <Link to="/" className='link-padding'>
                <IoPersonRemoveOutline className='icon' />
                <span>Block</span>
            </Link>
        </Menu.Item>
        <Menu.Item key="5" className='padding'>
            <Link to="/" className='link-padding'>
                <IoCodeSlashOutline className='icon' />
                <span>Embeded Tweet</span>
            </Link>
        </Menu.Item>
    </MenuWrapper>
);
