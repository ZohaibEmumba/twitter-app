import { useContext, useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { TwitterContext } from "../../../context/TwitterContext";
import { useNavigate } from "react-router-dom";

const LoginModal = () => {
  const { state } = useContext(TwitterContext);
  const { allUsers } = state;
  const [userData, setUserData] = useState<any>({
    username: "",
  });
  const Navigate = useNavigate();

  const onFinish = () => {
    const val = allUsers.some(checkUserName);
    if (val) {
      Navigate("/home");
      notification.success({
        message: "Login",
        description: "Welcome to login page",
      });
    } else {
      notification.error({
        message: "Wrong Credentials",
        description: "You Enter wrong username",
      });
    }
  };

  const checkUserName = (name: any) => {
    return name?.username === userData.username;
  };

  const onFinishFailed = () => {
    alert("Please fill out tge fields");
  };

  return (
    <Form
      name="Login Form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          onChange={(e: any) =>
            setUserData({
              ...userData,
              username: e.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginModal;
