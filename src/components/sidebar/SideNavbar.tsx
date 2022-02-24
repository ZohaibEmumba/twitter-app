import {
  FaTwitter,
  FaHome,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaEllipsisH,
} from "react-icons/fa";
import { VscSymbolNumeric } from "react-icons/vsc";
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
import { NAME, USERNAME } from "../../constants";
import {
  IoAddCircleOutline,
  IoBrushOutline,
  IoHomeOutline,
  IoNewspaperOutline,
  IoPersonOutline,
} from "react-icons/io5";
import ModalWrapper from "../common/Modal/Modal";
import CreateTweet from "../createtweet/CreateTweet";

const SideNavbar = () => {
  const [visible, setvisible] = useState<boolean>(false);
  const [notificationModal, setShowNotificationModal] = useState<boolean>(false);
  const [tweetModal, setTweetModal] = useState<boolean>(false);

  const handleVisibleChange = (
    visible: boolean | ((prevState: boolean) => boolean)
  ) => {
    setvisible(visible);
  };
  const handleNotificationClick = () => setShowNotificationModal(true);
  const handleTweetBtn = () => setTweetModal(true);

  return (
    <>
      {notificationModal && (
        <Notifications
          showModal={notificationModal}
          setShowModal={setShowNotificationModal}
          modalTitle="Notifications"
          children={undefined}
        />
      )}
      {tweetModal && (
        <ModalWrapper
          showModal={tweetModal}
          setShowModal={setTweetModal}
          modalTitle={"Create Tweet"}
          width={700}
        >
          <CreateTweet />
        </ModalWrapper>
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
                {true ? (
                  <FaHome className="icons" />
                ) : (
                  <IoHomeOutline className="icons" />
                )}
                <span>Home </span>
              </Link>
            </li>
            <li>
              <Link to="/home" className="hover-menu navItem">
                <VscSymbolNumeric className="icons" />
                <span>Explore</span>
              </Link>
            </li>
            <li>
              <Link to="/home" className="hover-menu navItem">
                <FaRegBell className="icons" onClick={handleNotificationClick} />
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
              <Link to="/home" className="hover-menu navItem">
                <FaRegEnvelope className="icons" />
                <span>Messages</span>
              </Link>
            </li>
            <li>
              <Link to="/home" className="hover-menu navItem">
                <FaRegBookmark className="icons" />
                <span>Bookmarks</span>
              </Link>
            </li>
            <li>
              <Link to="/home" className="hover-menu navItem">
                <IoNewspaperOutline className="icons" />
                <span>Lists</span>
              </Link>
            </li>
            <li>
              <Link to="/home" className="hover-menu navItem">
                <IoPersonOutline className="icons" />
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
                  <IoAddCircleOutline className="icons" />
                  <span>More</span>
                </Link>
              </Dropdown>
            </li>
            <li className="tweet-circle-btn">
                <IoBrushOutline onClick={handleTweetBtn} />
             </li>
          </ul>
          <SidebarBtn>
            <TwitterButton
              title="Tweet"
              className="tweetBtn"
              handleClick={handleTweetBtn}
            />
          </SidebarBtn>
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
                <Img
                  src={profileImg}
                  alt="profile logo"
                  width="40px"
                  height="40px"
                />
              </div>
              <NameWrapper>
                <div>
                  <MarginWrapper>
                    <span>
                      <TextSpan>
                        <strong>{NAME}</strong>
                      </TextSpan>
                    </span>
                  </MarginWrapper>
                </div>
                <div>
                  <MarginWrapper>
                    <span>
                      <TextSpan1>{USERNAME}</TextSpan1>
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
