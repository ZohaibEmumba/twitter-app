import React from 'react'
import { FaRegImage, FaRegListAlt, FaRegSmile, FaCalendarCheck } from 'react-icons/fa'
import { CreateSection, Createfirst, Createimg, Createinput, Createsecond, Createicons, Createbtn, HR, Wrapper } from './style'
import img from '../../assets/zohaib.jpg'
import TwitterButton from '../common/Button/TwitterButton'


const CreateTweet = () => {

  return (
    <Wrapper>
      <CreateSection>
        <Createfirst>
          <Createimg>
            <img src={img} alt="profile " />
          </Createimg>
          <Createinput>
            <div>
              <input
                type="text"
                className="create__control"
                placeholder="What's happing?"
              />
            </div>
            <HR></HR>
            <Createsecond>
              <Createicons>
                <span><FaRegImage className="ic" /></span>
                <span><FaRegListAlt className="ic" /></span>
                <span><FaRegSmile className="ic" /></span>
                <span><FaCalendarCheck className="ic" /></span>
              </Createicons>
              <Createbtn>
                <TwitterButton title="Tweet" className="createTweet" />
              </Createbtn>
            </Createsecond>
          </Createinput>
        </Createfirst>
      </CreateSection>
    </Wrapper>
  )
}

export default CreateTweet