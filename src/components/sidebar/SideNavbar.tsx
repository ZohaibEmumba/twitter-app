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
import { MainSection, ProfileButton, SideBar, SidebarBtn } from "./style";
import profileImg from "../../assets/zohaib.jpg";

const TweetBtn = {
  bgcolor: "rgb(29, 155, 240)",
  textcolor: "white",
  fontwght: "700",
  border: "none",
  padding: "0px 80px",
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
            <a href="" className="active">
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
            <TwitterButton title="Tweet" styleBtn={TweetBtn} />
          </SidebarBtn>
        </ul>
      </SideBar>
      <div
        style={{
          width: "236px",
          marginBottom: "12px",
          marginTop: "12px",
          marginRight: "10px",
          alignSelf: "flex-end",
        }}
      >
        <ProfileButton>
          <div>
            <img
              src={profileImg}
              alt=""
              width="40px"
              height="40px"
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              alignSelf: "center",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <div style={{ maxWidth: "100%" }}>
              <div style={{ marginLeft: "12px", marginRight: "12px" }}>
                <span>
                  <span style={{ fontSize: "13px" }}>
                    <strong>Muhammad Zohaib </strong>
                  </span>
                </span>
              </div>
            </div>
            <div style={{ maxWidth: "100%" }}>
              <div style={{ marginLeft: "12px", marginRight: "12px" }}>
                <span>
                  <span style={{ fontSize: "12px", color: "lightgrey" }}>
                    @MuhammadZohaib
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div style={{ alignSelf: "center" }}>
            <FaEllipsisH />
          </div>
        </ProfileButton>
      </div>
    </MainSection>
  );
};

export default SideNavbar;
