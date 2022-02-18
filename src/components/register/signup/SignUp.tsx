import { Form, Input, Row, DatePicker, Col } from "antd";
import { useState } from "react";
import TwitterButton from "../../common/Button/TwitterButton";
import ModalWrapper from "../../common/Modal/Modal";
import { Heading, LinkButton } from "./style";

type propsType = {
  showModal: boolean;
  setShowModal: any;
};

const SignUp = (props: propsType) => {
  const [change, setChange] = useState(false);
  const { showModal, setShowModal } = props;

  const handleClick = () => {
    setChange(!change);
  };
  const handleBtnClick = () => {
    alert("hello")
  }
  return (
    <>
      <ModalWrapper showModal={showModal} setShowModal={setShowModal}>
        <Row style={{ paddingBottom: "20px" }}>
          <Heading>
            <strong>Create Your Account</strong>
          </Heading>
        </Row>
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

          <Row style={{ paddingBottom: "20px" }}>
            <LinkButton onClick={handleClick}>
              <span>Use {change ? "phone" : "email"} instead</span>
            </LinkButton>
          </Row>
          <Row>
            <Heading>
              <strong>Date of birth</strong>
            </Heading>
            <p>
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
          </Row>
          <Row>
            <Col span={12}>
              <DatePicker
                placeholder="Select Date of Birth"
                style={{ width: "470px" }}
              />
            </Col>
          </Row>
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
