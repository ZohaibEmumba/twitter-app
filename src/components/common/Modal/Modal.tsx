import { Modal } from "antd";
import { propsType } from "../../../types";

const ModalWrapper = (props: propsType) => {
  const { showModal, setShowModal, children, modalTitle, width } = props;

  return (
    <>
      <Modal
        title={modalTitle}
        visible={showModal}
        maskClosable={false}
        onCancel={() => setShowModal(false)}
        footer={null}
        width={width}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalWrapper;
