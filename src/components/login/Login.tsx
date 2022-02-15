import {
  FormWrapper,
  ImgWrapper,
  Wrapper,
  Section,
  LinkWrapper,
  FormSection,
  Span,
  PrivacyText,
} from "./style";
import img from "../../assets/lohp.png";
import logo from "../../assets/twitter-logo.png";
import TwitterButton from "../common/Button/TwitterButton";
import whiteTwitter from '../../assets/icons8-twitter-250.png'

const SignUpBtn = {
  bgcolor: "rgb(29, 155, 240)",
  textcolor: "white",
  fontwght: '700',
  border: "none",
}
const SignInBtn = {
  bgcolor:"white",
  textcolor:"black",
  border:"1px solid lightGray"
}

const Login = () => {
  return (
    <>
      <Wrapper>
        <img src={whiteTwitter} alt="" width="350px" height="350px" className="twitter-logo" />
        <ImgWrapper>
          <img src={img} alt="Twitter-login-page" />
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
            <div style={{ width: '350px' }}>
              <Section style={{ height: "30px" }}></Section>
              <Section>
                <TwitterButton
                  styleBtn={SignUpBtn}
                  btn={"orange"}
                  name="Sign Up with phone or email" />

                <PrivacyText>
                  <p>By signing up, you are agree to the <a href="">Terms of Service </a>
                    and <a href="">Privacy Policy</a> , including <a href="">Cookie Use</a> .
                  </p>
                </PrivacyText>
              </Section>
              <Section style={{ marginTop: '40px' }}>
                <h1>Already have an account?</h1>
                <TwitterButton
                  styleBtn={SignInBtn}
                  name="Sign in"
                />

              </Section>
            </div>
          </FormWrapper>
        </FormSection>

        {/* style={{
                  backgroundColor: "white",
                  color: "rgb(29,155,240)",
                  border: "1px solid rgb(29,155,240)",
                  fontSize: "20px",
                  width: "50%",
                }} */}
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
