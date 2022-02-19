import { propsType } from '../../../types'
import ModalWrapper from '../../common/Modal/Modal'

 const LogoutModal = (props: propsType) => {
     
    const { showModal, setShowModal } = props;

  return (
    <ModalWrapper showModal={showModal} setShowModal={setShowModal}>
        <div>Hello There....</div>
    </ModalWrapper>
  )
}

export default LogoutModal