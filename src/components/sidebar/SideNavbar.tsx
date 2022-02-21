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
import {
  IconWrapper,
  Img,
  MainSection,
  MainWrapper,
  MarginWrapper,
  NameWrapper,
  ProfileButton,
  SideBar,
  SidebarBtn,
  TextSpan,
  TextSpan1,
} from "./style";
import profileImg from "../../assets/zohaib.jpg";
import { Link } from "react-router-dom";
import { Dropdown, Popover } from "antd";
import { useState } from "react";
import PopOverButton from "./Button/ButtonContent";
import PorpoverContent from "./content/PorpoverContent";
import { menu } from "./dropdown-menu/DropdownMenu";
import Notifications from "../notifications/Notifications";

const SideNavbar = () => {
  const [visible, setvisible] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const hide = () => {
    setvisible(false);
  };
  const handleVisibleChange = (visible: boolean | ((prevState: boolean) => boolean)) => {
    setvisible(visible);
  };
  const handleNotificationClick = () => {
    setShowModal(true);
  };

  return (
    <>
      {
      showModal && ( <Notifications
            showModal={showModal}
            setShowModal={setShowModal}
            modalTitle="Notifications"
            children={undefined} 
             />
      )}
      <MainSection>
        <SideBar>
          <ul>
            <li>
              <Link to="/home" className="twitter-logo">
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
              <Link to="/" className="hover-menu navItem">
                <FaHashtag className="icons" />
                <span>Explore</span>
              </Link>
            </li>
            <li>
              <Link to="/home" className="hover-menu navItem">
                <FaRegBell className="icons" />
                <span>
                  <TwitterButton
                    title="Notifications"
                    handleClick={handleNotificationClick}
                    className="none"
                  ></TwitterButton>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/" className="hover-menu navItem">
                <FaRegEnvelope className="icons" />
                <span>Messages</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="hover-menu navItem">
                <FaRegBookmark className="icons" />
                <span>Bookmarks</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="hover-menu navItem">
                <FaClipboardList className="icons" />
                <span>Lists</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="hover-menu navItem">
                <FaUserAlt className="icons" />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Dropdown
                overlay={menu}
                trigger={["click"]}
                placement="topCenter"
              >
                <Link to="/home" className="hover-menu navItem">
                  <FaMehBlank className="icons" />
                  <span>More</span>
                </Link>
              </Dropdown>
            </li>
            <SidebarBtn>
              <TwitterButton title="Tweet" className="tweetBtn" />
            </SidebarBtn>
          </ul>
        </SideBar>

        <Popover
          trigger="click"
          content={<PorpoverContent />}
          title={<PopOverButton />}
          visible={visible}
          onVisibleChange={handleVisibleChange}
        >
          <MainWrapper>
            <ProfileButton>
              <div>
                <Img src={profileImg} alt="profile logo" width="40px" height="40px" />
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
                      <TextSpan1>@MuhammadZohaib</TextSpan1>
                    </span>
                  </MarginWrapper>
                </div>
              </NameWrapper>
              <IconWrapper>
                <FaEllipsisH />
              </IconWrapper>
            </ProfileButton>
          </MainWrapper>
        </Popover>
      </MainSection>
    </>
  );
};

export default SideNavbar;
