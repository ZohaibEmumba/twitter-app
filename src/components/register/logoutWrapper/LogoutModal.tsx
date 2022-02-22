import { useNavigate } from 'react-router-dom';
import { propsType } from "../../../types";
import ModalWrapper from "../../common/Modal/Modal";
import { Wrapper } from "./style";
import Logo from '../../../assets/twitter-logo.png';
import TwitterButton from "../../common/Button/TwitterButton";
import { LOGOUT, LOGOUT_PARA } from '../../../constants';


const LogoutModal = (props: propsType) => {
  const { showModal, setShowModal } = props;
  const navigate = useNavigate();

  const handleLogOutBtn = () => navigate('/'); 
  const handleCancelBtn = () => setShowModal(false);

  return (
    <ModalWrapper
      showModal={showModal}
      setShowModal={setShowModal}
      modalTitle={"Logout"} >
      <Wrapper>
        <img src={Logo} alt="logo" width='40px' height='40px' />
        <div>
          <span className="heading">{LOGOUT}</span>
        </div>
        <div>
          <span>
            {LOGOUT_PARA}
          </span>
        </div>
        <div>
          <TwitterButton title="Log Out" className='logout' handleClick={handleLogOutBtn} />
        </div>
        <div>
          <TwitterButton title="Cancel" className='cancel' handleClick={handleCancelBtn}  />
        </div>
      </Wrapper>
    </ModalWrapper>
  );
};

export default LogoutModal;
