import {
  FormWrapper,
  ImgWrapper,
  Wrapper,
  Section,
  LinkWrapper,
  FormSection,
  Span,
  PrivacyText,
  ButtonDivWrapper,
} from "./style";
import { Link } from "react-router-dom";
import TwitterButton from "../../common/Button/TwitterButton";
import img from "../../../assets/lohp.png";
import logo from "../../../assets/twitter-logo.png";
import whiteTwitter from "../../../assets/icons8-twitter-250.png";
import { useState } from "react";
import SignUp from "../signup/SignUp";

const Login = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <>
    {
      showModal && (<SignUp showModal={showModal} setShowModal={setShowModal} />)
    }
      <Wrapper>
        <ImgWrapper>
          <img src={img} className='bg-image' alt="Twitter-login-page" />
          <img
          src={whiteTwitter}
          alt=""
          width="350px"
          height="350px"
          className="twitter-logo"
        />
        </ImgWrapper>

        <FormSection>
          <FormWrapper>
            <Section>
              <img src={logo} alt="twitter logo" height="40px" width="40px" />
            </Section>
            <Section>
              <Span className="title">Happening Now</Span>
            </Section>
            <Section>
              <Span className="sub-heading">Join Twitter Today</Span>
            </Section>

            <ButtonDivWrapper>
              <Section className="emptydiv"></Section>
              <Section>
                <TwitterButton
                  title="Sign Up with phone or email"
                  handleClick={handleClick}
                  className="loginBtn"
                />
                <PrivacyText>
                  <p>
                    By signing up, you are agree to the{" "}
                    <Link to="/termsofService">Terms of Service </Link>
                    and <Link to="/privacypolicy">Privacy Policy</Link> ,
                    including <Link to="/cookieuse">Cookie Use</Link> .
                  </p>
                </PrivacyText>
              </Section>
              <Section className="belowSect">
                <h1>Already have an account?</h1>
                <TwitterButton title="Sign in" className="signinBtn" />
              </Section>
            </ButtonDivWrapper>
          </FormWrapper>
        </FormSection>
      </Wrapper>
      <LinkWrapper>
        <ul>
          <li>About</li>
          <li>Help Center</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Accessability</li>
          <li>Ads info</li>
          <li>Blog</li>
          <li>Status</li>
          <li>Careers</li>
          <li>Brand Resource</li>
          <li>Advertising</li>
          <li>Marketing</li>
          <li>Twitter for Business</li>
          <li>Developers</li>
          <li>Directory</li>
          <li>Settings</li>
          <li>@2022 twitter, Inc</li>
        </ul>
      </LinkWrapper>
    </>
  );
};

export default Login;
