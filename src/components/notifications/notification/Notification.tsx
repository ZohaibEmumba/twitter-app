import { Img, NotificationWrapper } from "./style";
import zohaib from "../../../assets/zohaib.jpg";
import { TEXT, TIME } from "../../../constants";

const Notification = () => {
  return (
    <NotificationWrapper>
      <div>
        <Img src={zohaib} alt="Profile" />
      </div>
      <div>
        <div>
          <span className="text">{TEXT}</span>
        </div>
        <div>
          <span className="time">{TIME}</span>
        </div>
      </div>
    </NotificationWrapper>
  );
};

export default Notification;
