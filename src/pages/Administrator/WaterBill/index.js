import React from 'react'
import { Wrapper, WrapperSearch } from './styles'
import { Col, DatePicker, Form, Row, Select } from 'antd'
import { Input, Space } from 'antd';
import TitleComponent from '../../../components/TitleComponent';
import ListAddress from './components/ListAddress';
import ListBill from './components/ListBill';
// import Search from 'antd/es/transfer/search'
const { Search } = Input;
const WaterBill = () => {
    return (
        <Wrapper>
            <WrapperSearch>
                <Form>
                    <Row gutter={15}>
                        <Col span={16}>
                            <Search
                                placeholder="Nhập mã, tên, số điện thoại khách hàng"
                                onSearch={() => { console.log('heheh'); }}

                            />

                        </Col>
                        <Col span={4}>
                            <DatePicker
                                style={{ width: '100%' }}
                                onChange={() => { console.log('heheh'); }}
                                picker="month"
                                placeholder='Tháng'
                            />

                        </Col>
                        <Col span={4}>
                            <Select
                                defaultValue="Tất cả"
                                placeholder='Trạng thái'
                                style={{ width: '100%' }}
                                onChange={() => { console.log('heheh'); }}
                                options={[
                                    {
                                        value: 'Tất cả',
                                        label: 'Tất cả',
                                    },
                                    {
                                        value: 'Chưa nhập phiếu mới',
                                        label: 'Chưa nhập phiếu mới',
                                    },
                                    {
                                        value: 'Đang thu',
                                        label: 'Đang thu',
                                    },
                                    {
                                        value: 'Đã thanh toán',
                                        label: 'Đã thanh toán',

                                    },
                                    {
                                        value: 'Quá hạn nộp',
                                        label: 'Quá hạn nộp',

                                    },
                                    {
                                        value: 'Đã cắt nước',
                                        label: 'Đã cắt nước',
                                    },
                                ]}
                            />
                        </Col>
                    </Row>
                </Form>
            </WrapperSearch>

            <TitleComponent title={'Hoá đơn nước'} />

            <Row gutter={16}>
                <Col span={5}>
                    <ListAddress>
                    </ListAddress>
                </Col>
                <Col span={19}>
                    <ListBill />     
                </Col>
            </Row>
        </Wrapper>
    )
}

export default WaterBill