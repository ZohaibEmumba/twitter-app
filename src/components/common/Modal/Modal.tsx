import { Modal } from "antd";
import { propsType } from "../../../types";

const ModalWrapper = (props: propsType) => {
  const { showModal, setShowModal, children , modalTitle } = props;
  // const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

  return (
    <>
      <Modal
        title={modalTitle}
        visible={showModal}
        // confirmLoading={confirmLoading}
        maskClosable={false}
        onCancel={() => setShowModal(false)}
        footer
      >
       {children}
      </Modal>
    </>
  );
};

export default ModalWrapper;
