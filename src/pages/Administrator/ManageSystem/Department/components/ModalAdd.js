import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Input } from 'antd';

function ModalAdd({ open, onOk, onCancel, dataInfo }) {
    // console.log('HQUAN', dataInfo.PositionName);

    const [fields, setFields] = useState([]);
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    useEffect(() => {
        // Kiểm tra nếu dataInfo có giá trị, thì cập nhật fields
        if (dataInfo) {
            setFields([
                {
                    name: ['username'],
                    value: dataInfo.PositionName
                }
            ]);
        }
    }, [dataInfo]);
    return (
        <Modal title="Basic Modal" open={open} onOk={onOk} onCancel={onCancel} footer={null}>
            <Form onFinish={onFinish} fields={fields}>
                <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Hoàn tất
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ModalAdd;
