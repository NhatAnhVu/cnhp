import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';

function ModalAdd({ open, onOk, onCancel }) {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Modal title="Basic Modal" open={open} onOk={onOk} onCancel={onCancel}>
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                name="basic"
                labelCol={{
                    span: 8
                }}
                wrapperCol={{
                    span: 16
                }}
                style={{
                    maxWidth: 600
                }}
                initialValues={{
                    remember: true
                }}
            >
                <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ModalAdd;
