import React, { useState } from 'react'
import LogoutModal from '../../register/logoutWrapper/LogoutModal';
import { Section } from './style'

const PorpoverContent = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <>
    {
      showModal && (<LogoutModal showModal={showModal} setShowModal={setShowModal} modalTitle='Logout' children={undefined} />  )
    }

    <Section>
            <input type="submit" value="Add an existing account" />
            <input type="submit" onClick={handleClick} value="Log out @Muhammad96638527" />
    </Section>
    </>
  )
}

export default PorpoverContent