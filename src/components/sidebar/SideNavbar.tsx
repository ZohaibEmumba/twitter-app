import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaClipboardList,
  FaUserAlt,
  FaMehBlank,
} from 'react-icons/fa'
import { SideBar, SidebarBtn } from './style';


const SideNavbar = () => {
  return (
    <SideBar>
      <ul>
        <li>
          <a href="">
            <FaTwitter className="icons logo" />
          </a>
        </li>
        <li>
          <a href="" className='active'>
            <FaHome className="icons" />
            Home
          </a>
        </li>
        <li>
          <a href="">
            <FaHashtag className="icons" /> Explore
          </a>
        </li>
        <li>
          <a href="">
            <FaRegBell className="icons" /> Notifications
          </a>
        </li>
        <li>
          <a href="">
            <FaRegEnvelope className="icons" /> Messages
          </a>
        </li>
        <li>
          <a href="">
            <FaRegBookmark className="icons" /> Bookmarks
          </a>
        </li>
        <li>
          <a href="">
            <FaClipboardList className="icons" /> Lists
          </a>
        </li>
        <li>
          <a href="">
            <FaUserAlt className="icons" /> Profile
          </a>
        </li>
        <li>
          <a href="">
            <FaMehBlank className="icons" /> More
          </a>
        </li>
        <SidebarBtn>
          <a href="">Tweet</a>
        </SidebarBtn>
      </ul>
      
      
    </SideBar>
  );
};

export default SideNavbar;
