import React, { useEffect, useState } from 'react';
import { Button, Col, Dropdown, Form, Input, Modal, Row, Select } from 'antd';
import Title from 'antd/es/skeleton/Title';
import { WapperModal } from '../../../components/Style/style';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetRegion } from '../../../reducers/managementTeamSlice';

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        )
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
            </a>
        )
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
            </a>
        )
    }
];

const ModalAddUnits = (props) => {
    const dispatch = useDispatch();
    const { title, onOk, handlehideModal, isModalVisiable } = props;

    const [form] = Form.useForm();
    const nameValue = Form.useWatch('name', form);

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    const getRegion = () => {
        dispatch(fetchGetRegion(234));
    };

    useEffect(() => {
        getRegion();
    }, []);

    const listRegion = useSelector((state) => state?.manage?.region?.region?.Object);

    console.log(listRegion);
    const options = [];
    listRegion?.map((item) => {
        options.push({
            value: item.RegionID,
            label: item.RegionName
        });
    });

    const onFinish = () => {};

    return (
        <div>
            <WapperModal style={{ width: '900px' }} title={title} visible={isModalVisiable} onOk={onOk} onCancel={handlehideModal}>
                <Form autoComplete="off" form={form} onFinish={onFinish}>
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                name="name"
                                label="Tên tổ quản lý"
                                rules={[
                                    {
                                        required: true
                                    }
                                ]}
                            >
                                <Input style={{ width: '100%', display: 'block' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={12}>
                            <Form.Item
                                name="codeDepart"
                                label="Mã tổ chức"
                                rules={[
                                    {
                                        required: true
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={11}>
                            <Form.Item
                                name="phone"
                                label="Số điện thoại"
                                rules={[
                                    {
                                        required: true
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={7}>
                            <Form.Item
                                name="tinh"
                                label="Tỉnh/Thành phố"
                                rules={[
                                    {
                                        required: true
                                    }
                                ]}
                            >
                                <Select showSearch placeholder="Chọn nội dung" optionFilterProp="children" onChange={onChange} onSearch={onSearch} filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())} options={options} />
                            </Form.Item>
                            {/* </Form> */}
                        </Col>
                        <Col span={1}></Col>
                        <Col span={7}>
                            <Dropdown
                                menu={{
                                    items
                                }}
                                placement="bottomLeft"
                                arrow
                            >

                                    <Form.Item name="thanh pho" label="Quận/Huyện"
                                        rules={[
                                            {
                                            required: true,
                                            },
                                        ]}
                                        >
                                        <Select
                                            showSearch
                                            placeholder="Chọn nội dung"
                                            optionFilterProp="children"
                                            onChange={onChange}
                                            onSearch={onSearch}
                                            filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            // options={optionsLevelOne}
                                        />
                                    </Form.Item>
                            </Dropdown>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={7}>
                            <Dropdown
                                menu={{
                                    items
                                }}
                                placement="bottomLeft"
                                arrow
                            >

                                    <Form.Item name="quanhuyen" label="Xã/Phường"
                                        rules={[
                                            {
                                            required: true,
                                            },
                                        ]}
                                        >
                                        <Select
                                            showSearch
                                            placeholder="Chọn nội dung"
                                            optionFilterProp="children"
                                            onChange={onChange}
                                            onSearch={onSearch}
                                            filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            // options={optionsLevelTwo}
                                        />
                                    </Form.Item>

                            </Dropdown>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Form.Item
                                name="address"
                                label="Địa chỉ"
                                rules={[
                                    {
                                        required: true
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Form.Item
                                name="employee"
                                label="Nhân viên trong công ty"
                                rules={[
                                    {
                                        required: true
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={7}>
                            <Form.Item
                                name="account"
                                label="Tài khoản"
                                rules={[
                                    {
                                        required: true
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={7}>
                            <Form.Item
                                name="pass"
                                label="Mật khẩu"
                                rules={[
                                    {
                                        required: true
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={7}>
                            <Form.Item
                                name="repass"
                                label="Mật khẩu xác nhận"
                                rules={[
                                    {
                                        required: true
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Form.Item
                                name="kv"
                                label="Khu vực quản lý"
                                rules={[
                                    {
                                        required: true
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Form.Item>
                                <Button htmlType="submit" type="primary" style={{ float: 'right', display: 'block', background: 'var(--btn-primary-color)', width: '108px' }}>
                                    Ghi lại
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </WapperModal>
        </div>
    );
};

export default ModalAddUnits;
