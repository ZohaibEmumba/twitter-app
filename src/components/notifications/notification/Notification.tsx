import { Img, NotificationWrapper } from "./style";
import zohaib from "../../../assets/zohaib.jpg";

const Notification = () => {
  return (
    <NotificationWrapper>
      <div>
        <Img src={zohaib} alt="Profile" />
      </div>
      <div>
        <div>
          <span className="text">This Person reacted to your post</span>
        </div>
        <div>
          <span className="time">About an hour ago</span>
        </div>
      </div>
    </NotificationWrapper>
  );
};

export default Notification;
