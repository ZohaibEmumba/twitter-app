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
            <a href="">
              <FaTwitter className="icons logo" />
            </a>
          </li>
          <li>
            <a href="" className="hover-menu active">
              <FaHome className="icons" />
              Home
            </a>
          </li>
          <li>
            <a href=""  className="hover-menu">
              <FaHashtag className="icons" /> Explore
            </a>
          </li>
          <li>
            <a href=""  className="hover-menu">
              <FaRegBell className="icons" /> Notifications
            </a>
          </li>
          <li>
            <a href=""  className="hover-menu">
              <FaRegEnvelope className="icons" /> Messages
            </a>
          </li>
          <li>
            <a href=""  className="hover-menu">
              <FaRegBookmark className="icons" /> Bookmarks
            </a>
          </li>
          <li>
            <a href=""  className="hover-menu">
              <FaClipboardList className="icons" /> Lists
            </a>
          </li>
          <li>
            <a href=""  className="hover-menu">
              <FaUserAlt className="icons" /> Profile
            </a>
          </li>
          <li>
            <a href=""  className="hover-menu">
              <FaMehBlank className="icons" /> More
            </a>
          </li>
          <SidebarBtn>
            <TwitterButton title="Tweet" styleBtn={TweetBtn} />
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
