import { propsType } from '../../../types'
import ModalWrapper from '../../common/Modal/Modal'

 const LogoutModal = (props: propsType) => {
     
    const { showModal, setShowModal } = props;

  return (
    <ModalWrapper showModal={showModal} setShowModal={setShowModal}  modalTitle='Logout'>
        <div>Hello Logout Modal there....</div>
    </ModalWrapper>
  )
}

export default LogoutModal