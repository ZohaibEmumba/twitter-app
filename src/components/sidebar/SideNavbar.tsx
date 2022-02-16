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
  FaEllipsisH,
} from "react-icons/fa";
import TwitterButton from "../common/Button/TwitterButton";
import { IconWrapper, Img, MainSection, MainWrapper, MarginWrapper, NameWrapper, ProfileButton, SideBar, SidebarBtn, TextSpan, TextSpan1 } from "./style";
import profileImg from "../../assets/zohaib.jpg";
import { Link } from "react-router-dom";

const TweetBtn = {
  bgcolor: "rgb(29, 155, 240)",
  textcolor: "white",
  fontwght: "700",
  border: "none",
  padding: "0px 90px",
};

const SideNavbar = () => {
  return (
    <MainSection>
      <SideBar>
        <ul>
          <li>
            <Link to='/home' className="twitter-logo">
              <FaTwitter className="icons logo" />
            </Link>
          </li>
          <li>
            <Link to="/home" className="hover-menu active navItem">
              <FaHome className="icons" />
              <span>Home </span>
            </Link>
          </li>
          <li>
            <Link to="/home"  className="hover-menu navItem">
              <FaHashtag className="icons" /> 
              <span>Explore</span> 
            </Link>
          </li>
          <li>
            <Link to="/home"  className="hover-menu navItem">
              <FaRegBell className="icons" /> 
              <span>Notifications</span> 
            </Link>
          </li>
          <li>
            <Link to="/home"  className="hover-menu navItem">
              <FaRegEnvelope className="icons" />
              <span>Messages</span> 
            </Link>
          </li>
          <li>
            <Link to="/home"  className="hover-menu navItem">
              <FaRegBookmark className="icons" />
              <span>Bookmarks</span> 
            </Link>
          </li>
          <li>
            <Link to="/home"  className="hover-menu navItem">
              <FaClipboardList className="icons" />
              <span>Lists</span> 
            </Link>
          </li>
          <li>
            <Link to="/home"  className="hover-menu navItem">
              <FaUserAlt className="icons" />
              <span>Profile</span> 
            </Link>
          </li>
          <li>
            <Link to="/home"  className="hover-menu navItem">
              <FaMehBlank className="icons" />
              <span>More</span> 
            </Link>
          </li>
          <SidebarBtn>
            <TwitterButton 
              title="Tweet" 
              styleBtn={TweetBtn} 
              />
          </SidebarBtn>
        </ul>
      </SideBar>
      
      <MainWrapper>
        <ProfileButton>
          <div>
            <Img
              src={profileImg}
              alt=""
              width="40px"
              height="40px"
            />
          </div>
          <NameWrapper>
            <div>
              <MarginWrapper>
                <span>
                  <TextSpan>
                    <strong>Muhammad Zohaib </strong>
                  </TextSpan>
                </span>
            </MarginWrapper>
            </div>
            <div>
              <MarginWrapper>
                <span>
                  <TextSpan1>
                    @MuhammadZohaib
                  </TextSpan1>
                </span>
              </MarginWrapper>
            </div>
          </NameWrapper>
          <IconWrapper>
            <FaEllipsisH />
          </IconWrapper>
        </ProfileButton>
      </MainWrapper>

    </MainSection>
  );
};

export default SideNavbar;
