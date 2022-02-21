import React from 'react'
import LogoutModal from '../../components/register/logoutWrapper/LogoutModal'
import { propsType } from '../../types';

const LogoutScreen = (props: propsType) => {
  const { showModal, setShowModal } = props;

  return (
    <LogoutModal 
    showModal={showModal} 
    setShowModal={setShowModal} 
    modalTitle={'Log Out'}  
    children={undefined} 
    />
  )
}

export default LogoutScreen