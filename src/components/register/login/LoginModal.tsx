import { FC } from "react";
import { Form, Input,} from "antd";
import {  SIGN_IN } from "../../../constants";
import TwitterButton from "../../common/Button/TwitterButton";
import { RowStyle, Heading } from "./style";

const LoginModal:FC = () => {
  const handleBtnClick = () => {
    alert("hello");
  };
  return (
    <>
      <RowStyle className="padding-row">
        <Heading>
          <strong>{SIGN_IN}</strong>
        </Heading>
      </RowStyle>
      <Form name="basic" initialValues={{ remember: true }} autoComplete="off">
        <Form.Item>
          <Input placeholder="Phone , email or username" />
        </Form.Item>
        <Form.Item>
          <TwitterButton
            title="Next"
            className="nextBtn2"
            handleBtnClick={handleBtnClick}
          />
        </Form.Item>
        <Form.Item>
          <TwitterButton
            title="Forget Password"
            className="forgetBtn"
            handleBtnClick={handleBtnClick}
          />
        </Form.Item>
        <Form.Item>
         <p>Don't have an account?<strong>Sign up</strong></p>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginModal;
