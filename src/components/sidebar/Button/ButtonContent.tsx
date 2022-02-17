import { FaCheck } from 'react-icons/fa'
import { MainWrapper, ProfileButton, Img, NameWrapper, MarginWrapper, TextSpan, TextSpan1, IconWrapper } from './style'
import profileImg from "../../../assets/zohaib.jpg";

const PopOverButton = () => {
  return (
    <MainWrapper>
    <ProfileButton>
      <div>
        <Img
          src={profileImg}
          alt=""
          width="40px"
          height="40px"
        />
      </div>
      <NameWrapper>
        <div>
          <MarginWrapper>
            <span>
              <TextSpan>
                <strong>Muhammad Zohaib </strong>
              </TextSpan>
            </span>
        </MarginWrapper>
        </div>
        <div>
          <MarginWrapper>
            <span>
              <TextSpan1>
                @MuhammadZohaib
              </TextSpan1>
            </span>
          </MarginWrapper>
        </div>
      </NameWrapper>
      <IconWrapper>
        <FaCheck />
      </IconWrapper>
    </ProfileButton>
  </MainWrapper>

  )
}

export default PopOverButton