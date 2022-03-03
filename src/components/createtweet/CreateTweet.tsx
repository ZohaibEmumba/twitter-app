import { useState } from "react";
import {
  FaRegImage,
  FaRegListAlt,
  FaRegSmile,
  FaCalendarCheck,
} from "react-icons/fa";
import {
  CreateSection,
  Createfirst,
  Createimg,
  Createinput,
  Createsecond,
  Createicons,
  Createbtn,
  HR,
  Wrapper,
} from "./style";
import img from "../../assets/zohaib.jpg";
import TwitterButton from "../common/Button/TwitterButton";
import { Tooltip } from "antd";

const CreateTweet = (props: any) => {
  const { className } = props;
  const [postText, setPostText] = useState<any>({});
  const [disable, setDisable] = useState<boolean>(true);

  const handleCreateTweet = () => {
    alert(postText);
  };
  const handleInputChange = (e: { target: any }) => {
    if (e.target.value.length > 0) {
      setDisable(false);
      setPostText(e.target.value);
    } else {
      setDisable(true);
    }
  };
  return (
    <Wrapper>
      <CreateSection className={className ? className : "show-padding"}>
        <Createfirst>
          <Createimg>
            <img src={img} alt="profile " />
          </Createimg>
          <Createinput>
            <div>
              <input
                type="text"
                className="create__control"
                placeholder="What's happing?"
                onChange={handleInputChange}
              />
              <span></span>
            </div>
            <HR></HR>
            <Createsecond>
              <Createicons>
                <span>
                  <Tooltip placement="bottom" title={"media"}>
                    <label htmlFor="file">
                      <FaRegImage className="ic" />{" "}
                    </label>
                  </Tooltip>
                  <input type="file" id="file" style={{ display: "none" }} />
                </span>
                <Tooltip placement="bottom" title={"Poll"}>
                  <span>
                    <FaRegListAlt className="ic" />
                  </span>
                </Tooltip>
                <Tooltip placement="bottom" title={"GIF"}>
                  <span>
                    <FaRegSmile className="ic" />
                  </span>
                </Tooltip>
                <Tooltip placement="bottom" title={"Calender"}>
                  <span>
                    <FaCalendarCheck className="ic" />
                  </span>
                </Tooltip>
              </Createicons>
              <Createbtn>
                <TwitterButton
                  title="Tweet"
                  className="createTweetBtn"
                  disable={disable}
                  handleClick={handleCreateTweet}
                />
              </Createbtn>
            </Createsecond>
          </Createinput>
        </Createfirst>
      </CreateSection>
    </Wrapper>
  );
};

export default CreateTweet;
