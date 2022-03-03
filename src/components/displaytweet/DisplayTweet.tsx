import { FC, useState } from "react";
import { FaRegCheckCircle, FaEllipsisH } from "react-icons/fa";
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
import { posts } from "../../constants/PostObj";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const DsiplayTweet: FC = (): any => {
  const [heartActive, setHeartActive] = useState<boolean>(false);

  return posts.map((post, index) => (
    <div key={index}>
      {post?.isFollowing ? (
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
                <div
                  onClick={() => setHeartActive(!heartActive)}
                  className={heartActive ? "active-heart-icon" : "heart-icon"}
                >
                  <IoHeartOutline />
                  <span>
                    {heartActive ? post?.post_hearts : post?.post_hearts - 1}
                  </span>
                </div>
                <div className="leaf-icon">
                  <IoCloudUploadOutline />
                </div>
              </PostReactions>
            </PostDetails>
          </PostSection>
        </WholeWrapper>
      ) : null}{" "}
    </div>
  ));
};

export default DsiplayTweet;
