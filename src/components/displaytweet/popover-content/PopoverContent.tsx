import TwitterButton from "../../common/Button/TwitterButton";
import { Wrapper } from "./style";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
type PropTypes = {
  post: any;
};

const PopoverContent = (props: PropTypes) => {
  const { post } = props;
  return (
    <Wrapper>
      <div>
        <div>
          {post?.profile_img ? (
            <img src={post?.profile_img} alt="logo" className="logo-img" />
          ) : (
            <Avatar size={50} icon={<UserOutlined />} />
          )}
        </div>
        <div>
          <TwitterButton title="Following" className="followingBtn" />
        </div>
      </div>
      <div>
        <span>{post?.name}</span>
        <span>{post?.username}</span>
      </div>
      <div>{post?.work_desp ? <span>{post?.work_desp}</span> : null}</div>
      <div className="follower-sect">
        <span>
          <strong>{post?.following}</strong> {""} Following
        </span>
        <span>
          <strong>{post?.followers}</strong> Followers
        </span>
      </div>
    </Wrapper>
  );
};

export default PopoverContent;
