import { Tooltip } from "antd";
import { FaTwitter } from "react-icons/fa";
import { PostHome } from "./style";

const FixedHome = () => {
  return (
    <PostHome>
      <div>Home</div>
      <div>
      <Tooltip placement="bottom" title={"tweet"}>
        <FaTwitter className="twitter-logo" />
      </Tooltip>
      </div>
    </PostHome>
  );
};

export default FixedHome;
