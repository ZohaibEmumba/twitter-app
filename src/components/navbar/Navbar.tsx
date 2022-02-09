import { Nav, NavLink, Img, Button } from "./style";
import tw from "../../assets/twitter-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Nav>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/moments">Moments</NavLink>
          <NavLink to="/noti">Notifications</NavLink>
          <NavLink to="/msgs">Messages</NavLink>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <Img src={tw} alt="twitter logo"></Img>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button>
            <Link className="btn" to="/"> Tweet </Link>
          </Button>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
