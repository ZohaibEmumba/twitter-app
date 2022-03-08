import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { FaCheck } from "react-icons/fa";
import {
  MainWrapper,
  ProfileButton,
  Img,
  NameWrapper,
  MarginWrapper,
  TextSpan,
  TextSpan1,
  IconWrapper,
} from "./style";

const PopOverButton = (props: any) => {
  const { loginuser } = props;
  const { name, username, profile_img } = loginuser;
  return (
    <MainWrapper>
      <ProfileButton>
        <div>
          {profile_img ? (
            <Img
              src={profile_img}
              alt=""
              width="40px"
              height="40px"
              style={{ borderRadius: "50%" }}
            />
          ) : (
            <Avatar className="avatar-icon" size={50} icon={<UserOutlined />} />
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
          <FaCheck />
        </IconWrapper>
      </ProfileButton>
    </MainWrapper>
  );
};

export default PopOverButton;
