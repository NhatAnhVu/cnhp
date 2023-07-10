import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../reducers/authReducer";
import { useNavigate } from "react-router-dom";

function Login() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [form] = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    dispatch(login(values));
    if (isAuthenticated) {
      navigate("/");
    }
  };

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item label="Username" name={"Username"}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name={"Password"}>
        <Input />
      </Form.Item>
      <Button htmlType="submit">Login</Button>
    </Form>
  );
}

export default Login;
