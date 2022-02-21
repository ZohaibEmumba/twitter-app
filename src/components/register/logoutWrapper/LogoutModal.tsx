import { propsType } from "../../../types";
import ModalWrapper from "../../common/Modal/Modal";
import { Wrapper } from "./style";
import Logo from '../../../assets/twitter-logo.png';
import TwitterButton from "../../common/Button/TwitterButton";

const LogoutModal = (props: propsType) => {
  const { showModal, setShowModal } = props;

  const handleClick = () => {
    alert("hello")
  }

  return (
    <ModalWrapper
      showModal={showModal}
      setShowModal={setShowModal}
      modalTitle={"Logout"} >
      <Wrapper>
        <img src={Logo} alt="logo" width='40px' height='40px' />
        <div>
          <span className="heading">Log out of Twitter?</span>
        </div>
        <div>
          <span>
            You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account.
          </span>
        </div>
        <div>
          <TwitterButton title="Log Out" className='logout' handleClick={handleClick} />
        </div>
        <div>
          <TwitterButton title="Cancel" className='cancel' />
        </div>
      </Wrapper>
    </ModalWrapper>
  );
};

export default LogoutModal;
