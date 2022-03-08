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
import { Link, useLocation } from "react-router-dom";
import { Avatar, Dropdown, Popover } from "antd";
import { useContext, useState } from "react";
import PopOverButton from "./Button/ButtonContent";
import PorpoverContent from "./content/PorpoverContent";
import { menu } from "./dropdown-menu/DropdownMenu";
import Notifications from "../notifications/Notifications";
import { SHOWTREND } from "../../constants";
import {
  IoAddCircleOutline,
  IoBrushOutline,
  IoHomeOutline,
  IoNewspaperOutline,
  IoPersonOutline,
} from "react-icons/io5";
import ModalWrapper from "../common/Modal/Modal";
import CreateTweet from "../createtweet/CreateTweet";
import { TwitterContext } from "../../context/TwitterContext";
import { UserOutlined } from "@ant-design/icons";

const SideNavbar = () => {
  const [visible, setvisible] = useState<boolean>(false);
  const [notificationModal, setShowNotificationModal] =
    useState<boolean>(false);
  const [tweetModal, setTweetModal] = useState<boolean>(false);
  const { state, dispatch } = useContext(TwitterContext);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const { loginuser } = state;
  const { name, username, profile_img } = loginuser;

  const handleVisibleChange = (
    visible: boolean | ((prevState: boolean) => boolean)
  ) => {
    setvisible(visible);
  };
  const handleNotificationClick = () => setShowNotificationModal(true);
  const handleTweetBtn = () => setTweetModal(true);
  const handleHomeClick = () => {
    dispatch({
      type: SHOWTREND,
      payload: {
        trending: false,
        name: "",
      },
    });
  };

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
          <CreateTweet className="no-padding" />
        </ModalWrapper>
      )}
      <MainSection>
        <SideBar>
          <ul>
            <li>
              <Link
                to="/home"
                className="twitter-logo"
                onClick={handleHomeClick}
              >
                <FaTwitter className="icons logo" />
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                className={
                  splitLocation[1] === "home"
                    ? "hover-menu navItem active"
                    : "hover-menu navItem"
                }
                onClick={handleHomeClick}
              >
                {true ? (
                  <FaHome className="icons" />
                ) : (
                  <IoHomeOutline className="icons" />
                )}
                <span>Home </span>
              </Link>
            </li>
            <li>
              <Link
                to="/trending"
                className={
                  splitLocation[1] === "trending"
                    ? "hover-menu navItem active"
                    : "hover-menu navItem"
                }
              >
                <VscSymbolNumeric className="icons" />
                <span>Explore</span>
              </Link>
            </li>
            <li>
              <Link to="/home" className="hover-menu navItem">
                <FaRegBell
                  className="icons"
                  onClick={handleNotificationClick}
                />
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
                overlayStyle={{ position: "fixed" }}
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
          content={<PorpoverContent loginuser={loginuser} />}
          title={<PopOverButton loginuser={loginuser} />}
          visible={visible}
          onVisibleChange={handleVisibleChange}
          overlayStyle={{ position: "fixed" }}
        >
          <MainWrapper>
            <ProfileButton>
              <div>
                {profile_img ? (
                  <img
                    src={profile_img}
                    alt="profile img"
                    width={"40px"}
                    height={"40px"}
                    style={{ borderRadius: "50%" }}
                  />
                ) : (
                  <Avatar
                    className="avatar-icon"
                    size={50}
                    icon={<UserOutlined />}
                  />
                )}
              </div>
              <NameWrapper>
                <div>
                  <MarginWrapper>
                    <span>
                      <TextSpan>
                        <strong>{name}</strong>
                      </TextSpan>
                    </span>
                  </MarginWrapper>
                </div>
                <div>
                  <MarginWrapper>
                    <span>
                      <TextSpan1>{username}</TextSpan1>
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
