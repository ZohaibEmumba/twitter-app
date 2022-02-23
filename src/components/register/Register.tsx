import { FC, useState } from "react";
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
import TwitterButton from "../common/Button/TwitterButton";
import img from "../../assets/lohp.png";
import logo from "../../assets/twitter-logo.png";
import whiteTwitter from "../../assets/icons8-twitter-250.png";
import SignUp from "./signup/SignUp";
import { ALREADY_ACC, COOKIE, HAPEENING_NOW, JOIN_TWITTER_TODAY, PRIVACY, TERMS } from "../../constants";
import ModalWrapper from "../common/Modal/Modal";
import LoginModal from "./login/LoginModal";

const Login:FC = () => {
  const [showSignUpModal, setShowSignUpModal] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  const menuList = [
    "About",
    "Help Center",
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
    "Accessability",
    "Ads info",
    "Blog",
    "Status",
    "Careers",
    "Brand Resource",
    "Advertising",
    "Marketing",
    "Twitter for Business",
    "Developers",
    "Directory",
    "Settings",
    "@2022 twitter, Inc",
  ];

  const handleSignUpClick = () => setShowSignUpModal(true);
  const handleLoginClick = () => setShowLoginModal(true);
  
  return (
    <>
      {showSignUpModal && (
        <SignUp
          showModal={showSignUpModal}
          setShowModal={setShowSignUpModal}
          modalTitle="Sign Up"
          children={undefined}
        />
      )}
      {showLoginModal && (
        <ModalWrapper showModal={showLoginModal} setShowModal={setShowLoginModal}  modalTitle={"Login"}>
           <LoginModal  />
        </ModalWrapper>
      )}
      <Wrapper>
        <ImgWrapper>
          <img src={img} className="bg-image" alt="Twitter-login-page" />
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
              <Span className="title">{HAPEENING_NOW}</Span>
            </Section>
            <Section>
              <Span className="sub-heading">{JOIN_TWITTER_TODAY}</Span>
            </Section>

            <ButtonDivWrapper>
              <Section className="emptydiv"></Section>
              <Section>
                <TwitterButton
                  title="Sign Up with phone or email"
                  handleClick={handleSignUpClick}
                  className="loginBtn"
                />
                <PrivacyText>
                  <p>
                    By signing up, you are agree to the{" "}
                    <Link to="/termsofService">{TERMS} </Link>
                    and <Link to="/privacypolicy">{PRIVACY}</Link> ,
                    including <Link to="/cookieuse">{COOKIE}</Link> .
                  </p>
                </PrivacyText>
              </Section>
              <Section className="belowSect">
                <h1>{ALREADY_ACC}</h1>
                <TwitterButton
                  title="Sign in"
                  className="signinBtn"
                  handleClick={handleLoginClick}
                />
              </Section>
            </ButtonDivWrapper>
          </FormWrapper>
        </FormSection>
      </Wrapper>
      <LinkWrapper>
        <ul>
          {menuList.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
      </LinkWrapper>
    </>
  );
};

export default Login;
