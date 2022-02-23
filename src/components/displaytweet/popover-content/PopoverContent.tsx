import { FC } from "react";
import { Wrapper } from "./style";
import zohaib from "../../../assets/zohaib.jpg";
import TwitterButton from "../../common/Button/TwitterButton";
import { DESP, FOLLOWERE, FOLLOWING, NAME, USERNAME } from "../../../constants";

const PopoverContent: FC = () => {
  return (
    <Wrapper>
      <div>
        <div>
          <img src={zohaib} alt="logo" className="logo-img" />
        </div>
        <div>
          <TwitterButton title="Follow" className="followBtn" />
        </div>
      </div>
      <div>
        <span>{NAME}</span>
        <span>{USERNAME}</span>
      </div>
      <div>
        <span>{DESP}</span>
      </div>
      <div className="follower-sect">
        <span>{FOLLOWING}</span> Following
        <span>{FOLLOWERE}</span> Followers
      </div>
    </Wrapper>
  );
};

export default PopoverContent;
