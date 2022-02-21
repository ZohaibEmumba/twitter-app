import { FaRegCheckCircle, FaEllipsisH } from "react-icons/fa";
import img from "../../assets/zohaib.jpg";
import pakistanImg from "../../assets/Pakistan.jpg";
import {
  FirstPost,
  PostDetails,
  PostImg,
  PostImgDetails,
  PostName,
  PostReactions,
  PostSection,
  PostUserName,
  WholeWrapper,
} from "./style";
import { Dropdown, Popover } from "antd";
import { menu } from "./dropdownlist/MenuList";
import {
  IoChatbubbleOutline,
  IoCloudUploadOutline,
  IoHeartOutline,
  IoRepeatSharp,
} from "react-icons/io5";
import PopoverContent from "./popover-content/PopoverContent";
import { DEMO_TEXT, NAME, USERNAME } from "../../constants";

const DsiplayTweet = () => {
  return (
    <WholeWrapper>
      <PostSection>
        <FirstPost>
          <div>
            <Popover content={<PopoverContent />} placement="bottom">
              <PostImg>
                <img src={img} alt="profile img" />
              </PostImg>
            </Popover>
          </div>
          <div className="post-wrapper">
            <Popover content={<PopoverContent />} placement="bottomRight">
              <PostName>
                <span>
                  <strong>{NAME}</strong>
                </span>
                <FaRegCheckCircle className="verify" />
              </PostName>
            </Popover>
            <PostUserName>
              <span>{USERNAME}</span> . <span>6m</span>
            </PostUserName>
          </div>
          <div>
            <Dropdown overlay={menu} trigger={["click"]} placement="topRight">
              <FaEllipsisH className="dot-icon" />
            </Dropdown>
          </div>
        </FirstPost>
        <PostDetails>
          <PostImgDetails>{DEMO_TEXT}</PostImgDetails>
          <PostImgDetails>
            <img src={pakistanImg} alt="post" />
          </PostImgDetails>
          <PostReactions>
            <div className="cmnt-icon">
              <span>
                <IoChatbubbleOutline />
              </span>
              <span>45</span>
            </div>
            <div className="share-icon">
              <IoRepeatSharp />
              <span>4</span>
            </div>
            <div className="heart-icon">
              <IoHeartOutline />
              <span>345</span>
            </div>
            <div className="leaf-icon">
              <IoCloudUploadOutline />
              <span>234</span>
            </div>
          </PostReactions>
        </PostDetails>
      </PostSection>
    </WholeWrapper>
  );
};

export default DsiplayTweet;
