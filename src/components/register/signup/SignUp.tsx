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
          <Col span={24}>
            <Heading>
              <strong>{CREATE_ACC}</strong>
            </Heading>
          </Col>
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
            <Col span={24}>
              <LinkButton onClick={handleClick}>
                <span>Use {change ? "phone" : "email"} instead</span>
              </LinkButton>
            </Col>
          </RowStyle>
          <RowStyle>
            <Col span={24}>
              <Heading>
                <strong>{DOB}</strong>
              </Heading>
              <p>{SIGNUP_PARA}</p>
            </Col>
          </RowStyle>
          <RowStyle>
            <Col span={24}>
              <DatePicker
                placeholder="Select Date of Birth"
                style={{ width: "100%" }}
              />
            </Col>
          </RowStyle>
          <Form.Item>
            <RowStyle>
              <Col span={24}>
                <TwitterButton
                  title="Next"
                  className="nextBtn"
                  handleBtnClick={handleBtnClick}
                />
              </Col>
            </RowStyle>
          </Form.Item>
        </Form>
      </ModalWrapper>
    </>
  );
};

export default SignUp;
