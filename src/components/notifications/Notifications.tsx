import { propsType } from "../../types";
import ModalWrapper from "../common/Modal/Modal";
import Notification from "./notification/Notification";
import { Section } from "./style";

const Notifications = (props: propsType) => {
  const { showModal, setShowModal } = props;
  return (
    <ModalWrapper
      showModal={showModal}
      setShowModal={setShowModal}
      modalTitle="Notifications"     >
      <Section>
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </Section>
    </ModalWrapper>
  );
};

export default Notifications;
