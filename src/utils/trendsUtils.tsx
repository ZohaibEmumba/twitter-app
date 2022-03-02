import { MenuWrapper } from "../components/sidebar/dropdown-menu/style";
import { FaRegSadTear } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Menu } from "antd";

export const menu = (
    <div>
      <MenuWrapper>
        <Menu.Item key="0" className="padding">
          <Link to="/" className="link-padding">
            <FaRegSadTear className="icon" />
            <span>Not interested in this Tweet</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="1" className="padding">
          <Link to="/" className="link-padding">
            <FaRegSadTear className="icon" />
            <span>This Trend is harmful</span>
          </Link>
        </Menu.Item>
      </MenuWrapper>
    </div>
  );
  