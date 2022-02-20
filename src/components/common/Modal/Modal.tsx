import { useState } from "react";
import { Modal } from "antd";
import { propsType } from "../../../types";

const ModalWrapper = (props: propsType) => {
  const { showModal, setShowModal, children , modalTitle } = props;
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
        title={modalTitle}
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
