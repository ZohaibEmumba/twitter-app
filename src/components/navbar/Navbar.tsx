import { Nav, NavLink, Img, Button, NavList, Logo, BtnWrapper } from "./style";
import tw from "../../assets/twitter-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavList>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/moments">Moments</NavLink>
          <NavLink to="/noti">Notifications</NavLink>
          <NavLink to="/msgs">Messages</NavLink>
        </NavList>
        <Logo>
          <Link to="/">
            <Img src={tw} alt="twitter logo"></Img>
          </Link>
        </Logo>
        <BtnWrapper>
          <Button>
            <Link className="btn" to="/"> Tweet </Link>
          </Button>
        </BtnWrapper>
      </Nav>
    </>
  );
};

export default Navbar;
