import { useState } from "react";
import { Modal } from "antd";

type propsType = {
  showModal: boolean;
  setShowModal: any;
  children: any;
};

const ModalWrapper = (props: propsType) => {
  const { showModal, setShowModal, children } = props;
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };
  return (
    <>
      <Modal
        title="Sign Up"
        visible={showModal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={() => setShowModal(false)}
        maskClosable={false}
        footer
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalWrapper;
