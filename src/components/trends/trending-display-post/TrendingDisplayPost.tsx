import { FC, useContext } from "react";
import { FaRegCheckCircle, FaEllipsisH } from "react-icons/fa";
import {
  FirstPost,
  HashTag,
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
import { menu } from "../../displaytweet/dropdownlist/MenuList";
import {
  IoChatbubbleOutline,
  IoCloudUploadOutline,
  IoHeartOutline,
  IoRepeatSharp,
} from "react-icons/io5";
import PopoverContent from "../../displaytweet/popover-content/PopoverContent";
import { TrendingPosts } from "../../../constants/PostObj";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { TwitterContext } from "../../../context/TwitterContext";

const TrendingDisplayTweet: FC = (): any => {
  const { state } = useContext(TwitterContext);
  const { name } = state;

  return TrendingPosts.map((post, index) =>
    post?.trend_keyword === name ? (
      <div key={index}>
        <WholeWrapper>
          <PostSection>
            <FirstPost>
              <div>
                <Popover
                  content={<PopoverContent post={post} />}
                  placement="bottom"
                  trigger={"click"}
                >
                  {post?.profile_img ? (
                    <PostImg>
                      <img src={post.profile_img} alt="profile img" />
                    </PostImg>
                  ) : (
                    <Avatar
                      className="avatar-icon"
                      size={50}
                      icon={<UserOutlined />}
                    />
                  )}
                </Popover>
              </div>
              <div className="post-wrapper">
                <Popover
                  content={<PopoverContent post={post} />}
                  placement="bottomRight"
                >
                  <PostName>
                    <span>
                      <strong>{post?.name}</strong>
                    </span>
                    <FaRegCheckCircle
                      className={post?.verified ? "verify" : "verify_filled"}
                    />
                  </PostName>
                </Popover>
                <PostUserName>
                  <span>{post?.username}</span>.<span>{post?.post_time}</span>
                </PostUserName>
              </div>
              <div>
                <Dropdown
                  overlay={menu}
                  trigger={["click"]}
                  placement="bottomRight"
                >
                  <FaEllipsisH className="dot-icon" />
                </Dropdown>
              </div>
            </FirstPost>
            <PostDetails>
              <PostImgDetails>{post?.post_despcription}</PostImgDetails>
              <HashTag>{post?.trending_desp}</HashTag>
              {post?.post_img ? (
                <PostImgDetails>
                  <img src={post?.post_img} alt="post" />
                </PostImgDetails>
              ) : null}
              <PostReactions>
                <div className="cmnt-icon">
                  <span>
                    <IoChatbubbleOutline />
                  </span>
                  <span>{post?.post_coments}</span>
                </div>
                <div className="share-icon">
                  <IoRepeatSharp />
                  <span>{post?.retweet}</span>
                </div>
                <div className="heart-icon">
                  <IoHeartOutline />
                  <span>{post?.post_hearts}</span>
                </div>
                <div className="leaf-icon">
                  <IoCloudUploadOutline />
                </div>
              </PostReactions>
            </PostDetails>
          </PostSection>
        </WholeWrapper>
      </div>
    ) : null
  );
};

export default TrendingDisplayTweet;
