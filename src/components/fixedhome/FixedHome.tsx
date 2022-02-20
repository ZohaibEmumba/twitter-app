import { FaTwitter } from "react-icons/fa";
import { PostHome } from "./style";

const FixedHome = () => {
  return (
    <PostHome>
      <div> Home</div>
      <div>
        <FaTwitter className="twitter-logo" />
      </div>
    </PostHome>
  );
};

export default FixedHome;
