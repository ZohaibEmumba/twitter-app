 import { Nav, NavItem } from "./style";
import { HomeOutlined } from "@ant-design/icons";
import { Typography } from 'antd';

const { Title } = Typography;

const SideNavbar = () => {
  return (
    <Nav>
      <ul>
      <NavItem>
        <HomeOutlined style={{ fontSize: '26px' }}/>
        <Title level={2}>Home</Title>
      </NavItem>
      </ul>
    </Nav>
  );
};

export default SideNavbar;
