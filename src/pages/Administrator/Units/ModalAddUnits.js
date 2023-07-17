import React, { useState } from 'react';
import { Button, Col, Dropdown, Form, Input, Modal, Row } from 'antd';
import Title from 'antd/es/skeleton/Title';
import { WapperModal } from '../../../components/Style/style';

const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      ),
    },
];

const ModalAddUnits = (props) => {

    const {title, onOk, handlehideModal, isModalVisiable} = props

    const [form] = Form.useForm();
    const nameValue = Form.useWatch('name', form);

    return (
        <div>
            <WapperModal style={{width: '900px'}} title={title} visible={isModalVisiable} onOk={onOk} onCancel={handlehideModal}>
                <Row>
                    {/* <Title level={5}>h5. Ant Design</Title>
                    <Title level={5}>h5. Ant Design</Title> */}
                    <Col span={24}>
                        <Form form={form} layout="vertical" autoComplete="off">
                            <Form.Item name="name" label="Tên tổ quản lý"
                            rules={[
                                {
                                required: true,
                                },
                            ]}
                            >
                            <Input />
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form form={form} layout="vertical" autoComplete="off">
                                <Form.Item name="name" label="Mã tổ chức"
                                    rules={[
                                        {
                                        required: true,
                                        },
                                    ]}
                                    >
                                    <Input />
                                </Form.Item>
                        </Form>
                    </Col>
                    <Col span={1}>
                    </Col>
                    <Col span={11}>
                            <Form form={form} layout="vertical" autoComplete="off">
                                <Form.Item name="name" label="Số điện thoại"
                                    rules={[
                                        {
                                        required: true,
                                        },
                                    ]}
                                    >
                                    <Input />
                                </Form.Item>
                            </Form>
                    </Col>
                </Row>
                <Row>
                    <Col span={7}>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            placement="bottomLeft"
                            arrow
                        >
                            <Form form={form} layout="vertical" autoComplete="off">
                                <Form.Item name="name" label="Tỉnh/Thành phố"
                                    rules={[
                                        {
                                        required: true,
                                        },
                                    ]}
                                    >
                                    <Input placeholder="Chọn nội dung" />
                                </Form.Item>
                            </Form>
                        </Dropdown>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={7}>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            placement="bottomLeft"
                            arrow
                        >
                            <Form form={form} layout="vertical" autoComplete="off">
                                <Form.Item name="name" label="Quận/Huyện"
                                    rules={[
                                        {
                                        required: true,
                                        },
                                    ]}
                                    >
                                    <Input placeholder="Chọn nội dung"/>
                                </Form.Item>
                            </Form>
                        </Dropdown>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={7}>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            placement="bottomLeft"
                            arrow
                        >
                            <Form form={form} layout="vertical" autoComplete="off">
                                <Form.Item name="name" label="Xã/Phường"
                                    rules={[
                                        {
                                        required: true,
                                        },
                                    ]}
                                    >
                                    <Input placeholder="Chọn nội dung"/>
                                </Form.Item>
                            </Form>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Form form={form} layout="vertical" autoComplete="off">
                            <Form.Item name="name" label="Địa chỉ"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                >
                                <Input />
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Form form={form} layout="vertical" autoComplete="off">
                            <Form.Item name="name" label="Nhân viên trong công ty"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                >
                                <Input />
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col span={7}>
                        <Form form={form} layout="vertical" autoComplete="off">
                            <Form.Item name="name" label="Tài khoản"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                >
                                <Input />
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={1}>
                    </Col>
                    <Col span={7}>
                        <Form form={form} layout="vertical" autoComplete="off">
                            <Form.Item name="name" label="Mật khẩu"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                >
                                <Input />
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={1}>
                    </Col>
                    <Col span={7}>
                        <Form form={form} layout="vertical" autoComplete="off">
                            <Form.Item name="name" label="Mật khẩu xác nhận"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                >
                                <Input />
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Form form={form} layout="vertical" autoComplete="off">
                            <Form.Item name="name" label="Khu vực quản lý"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                >
                                <Input />
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </WapperModal>
        </div>
    )
}

export default ModalAddUnits