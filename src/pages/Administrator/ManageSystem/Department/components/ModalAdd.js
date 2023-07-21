import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Input } from 'antd';

function ModalAdd({ open, onOk, onCancel, dataInfo, onDataSubmit }) {
    // console.log('HQUAN', dataInfo.PositionName);

    const [fields, setFields] = useState([]);
    const onFinish = (values) => {
        onDataSubmit(values);
        console.log('123123123213', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    useEffect(() => {
        // Kiểm tra nếu dataInfo có giá trị, thì cập nhật fields
        if (dataInfo) {
            setFields([
                {
                    name: ['PositionName'],
                    value: dataInfo.PositionName
                },
                {
                    name: ['Note'],
                    value: dataInfo.Note
                }
            ]);
        }
    }, [dataInfo]);
    return (
        <Modal title="Basic Modal" open={open} onOk={onOk} onCancel={onCancel} footer={null}>
            <Form onFinish={onFinish} fields={fields} layout="vertical">
                <Form.Item label="Chức danh" name="PositionName" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input placeholder="Nhập tên chức danh" />
                </Form.Item>
                <Form.Item label="Ghi chú" name="Note" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input placeholder="Nhập ghi chú" />
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
