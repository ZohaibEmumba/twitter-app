import {
  FormWrapper,
  ImgWrapper,
  Wrapper,
  Section,
  LinkWrapper,
} from "./style";
import img from "../../assets/lohp.png";
import { Button } from "../common/Button/style";
import logo from "../../assets/twitter-logo.png";
import { Typography } from "antd";
const { Title } = Typography;

const Login = () => {
  return (
    <>
      <Wrapper>
        <ImgWrapper>
          <img src={img} alt="Twitter-login-page" />
        </ImgWrapper>
        <section style={{ padding: "16px", width: "45vw" }}>
          <FormWrapper>
            <Section>
              <img src={logo} alt="twitter logo" height="40px" width="40px" />
            </Section>
            <Section>
              <Title style={{ fontSize: "60px" }}>Happening Now</Title>
            </Section>
            <Section>
              <Title style={{ fontSize: "40px" }}>Join Twitter Today</Title>
            </Section>
            <Section>
              <Button style={{ width: "50%" }}>
                Sign Up with phone or email
              </Button>
              <p style={{ fontSize: "12px" }}>
                By signing up, you are agree to the Terms of Service <br></br>
                and Privacy Policy, including Cookie Use.
              </p>
            </Section>
            <Section>
              <h1>Already have an account?</h1>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "rgb(29,155,240)",
                  border: "1px solid rgb(29,155,240)",
                  fontSize: "20px",
                  width: "50%",
                }}
              >
                Sign in
              </Button>
            </Section>
          </FormWrapper>
        </section>
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
