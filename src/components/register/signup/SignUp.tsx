import { Form, Input, DatePicker, Col } from "antd";
import { useState } from "react";
import { CREATE_ACC, DOB, SIGNUP_PARA } from "../../../constants";
import { propsType } from "../../../types";
import TwitterButton from "../../common/Button/TwitterButton";
import ModalWrapper from "../../common/Modal/Modal";
import { Heading, LinkButton, RowStyle } from "./style";

const SignUp = (props: propsType) => {
  const [change, setChange] = useState(false);
  const { showModal, setShowModal } = props;

  const handleClick = () => {
    setChange(!change);
  };
  const handleBtnClick = () => {
    alert("hello");
  };
  return (
    <>
      <ModalWrapper
        showModal={showModal}
        setShowModal={setShowModal}
        modalTitle={"Sign Up"}
      >
        <RowStyle className="padding-row">
          <Heading>
            <strong>{CREATE_ACC}</strong>
          </Heading>
        </RowStyle>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item>
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item>
            {change ? (
              <Input placeholder="Email" />
            ) : (
              <Input placeholder="Phone" />
            )}
          </Form.Item>

          <RowStyle className="padding-row">
            <LinkButton onClick={handleClick}>
              <span>Use {change ? "phone" : "email"} instead</span>
            </LinkButton>
          </RowStyle>
          <RowStyle>
            <Heading>
              <strong>{DOB}</strong>
            </Heading>
            <p>{SIGNUP_PARA}</p>
          </RowStyle>
          <RowStyle>
            <Col span={12}>
              <DatePicker placeholder="Select Date of Birth" />
            </Col>
          </RowStyle>
          <Form.Item wrapperCol={{ offset: 1, span: 16 }}>
            <TwitterButton
              title="Next"
              className="nextBtn"
              handleBtnClick={handleBtnClick}
            />
          </Form.Item>
        </Form>
      </ModalWrapper>
    </>
  );
};

export default SignUp;
