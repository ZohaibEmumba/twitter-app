import { Link } from "react-router-dom";
import { FC, useContext } from "react";
import { Tooltip } from "antd";
import { FaTwitter } from "react-icons/fa";
import { PostHome } from "./style";
import { SHOWTREND } from "../../constants";
import { TwitterContext } from "../../context/TwitterContext";

const FixedHome: FC = () => {
  const { dispatch } = useContext(TwitterContext);
  const handleClick = () => {
    dispatch({
      type: SHOWTREND,
      payload: {
        trending: false ,
        name : ""
      }
    });
  };
  return (
    <PostHome>
      <div>
        <Link to="/home" onClick={handleClick}>
          Home
        </Link>{" "}
      </div>
      <div>
        <Tooltip placement="bottom" title={"tweet"}>
          <FaTwitter className="twitter-logo" />
        </Tooltip>
      </div>
    </PostHome>
  );
};

export default FixedHome;
