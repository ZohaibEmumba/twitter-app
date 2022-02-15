import React from 'react'
import { FaRegImage, FaRegListAlt, FaRegSmile, FaCalendarCheck } from 'react-icons/fa'
import { CreateSection, Createfirst, Createimg, Createinput, Createsecond, Createicons, Createbtn , HR } from './style'
import img from '../../assets/zohaib.jpg'

const CreateTweet = () => {
  return (
    <CreateSection>
    <Createfirst>
      <Createimg>
        <img src={img} alt="profile " />
      </Createimg>
      <Createinput>
        <input
          type="text"
          className="create__control"
          placeholder="What's happing?"
        />
      </Createinput>
    </Createfirst>
    <HR></HR>
    <Createsecond>
      <Createicons>
        <FaRegImage className="ic" />
        <FaRegListAlt className="ic" />
        <FaRegSmile className="ic" />
        <FaCalendarCheck className="ic" />
      </Createicons>
      <Createbtn>
        <a href="">Tweet</a>
      </Createbtn>
    </Createsecond>
  </CreateSection>
  )
}

export default CreateTweet