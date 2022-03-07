import TwitterButton from "../../common/Button/TwitterButton";
import { Wrapper } from "./style";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";


const PopoverContent = (props: any) => {
  const { post } = props;
  const handleFollowClick = (val: boolean) => {
    console.log(val)
  }
  return (
    <Wrapper>
      <div>
        <div>
          {post?.tweets?.profile_img ? (
            <img src={post?.tweets?.profile_img} alt="logo" className="logo-img" />
          ) : (
            <Avatar size={50} icon={<UserOutlined />} />
          )}
        </div>
        <div>
          <TwitterButton
            title="Following"
            className="followingBtn" 
            // handleClick={() => handleFollowClick(post?.isFollowing)}
          />
        </div>
      </div>
      <div>
        <span>{post?.name}</span>
        <span>{post?.username}</span>
      </div>
      <div>{post?.work_desp ? <span>{post?.work_desp}</span> : null}</div>
      <div className="follower-sect">
        <span>
          <strong>20k</strong> {""} Following
        </span>
        <span>
          <strong>110k</strong> Followers
        </span>
      </div>
    </Wrapper>
  );
};

export default PopoverContent;
