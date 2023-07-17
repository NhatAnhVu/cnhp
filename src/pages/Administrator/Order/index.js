import React from 'react'
import { Wrapper, WrapperButton, WrapperSearch } from './styles'
import { Button, Col, DatePicker, Divider, Form, Input, Row, Select } from 'antd'
import TitleComponent from '../../../components/TitleComponent';
import ListOrder from './components/ListOrder';
const { Search } = Input;
const { RangePicker } = DatePicker;
const Order = () => {
    return (
        <Wrapper>
            <WrapperSearch>

                <Form>
                    <Row gutter={15}>
                        <Col span={8}>
                            <Search
                                placeholder="Nhập mã, tên, số điện thoại khách hàng"
                            />

                        </Col>
                        <Col span={6}>
                            <RangePicker
                                placeholder={['Ngày yêu cầu', '']}
                                style={{ width: '100%' }}
                            />

                        </Col>
                        <Col span={6}>
                            <RangePicker
                                placeholder={['Ngày giao hàng', '']}
                                style={{ width: '100%' }}

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
                                        value: 'Chờ xác nhận',
                                        label: 'Chưa nhập phiếu mới',
                                    },
                                    {
                                        value: 'Đang giao',
                                        label: 'Đang thu',
                                    },
                                    {
                                        value: 'Đã giao',
                                        label: 'Đã thanh toán',

                                    },
                                    {
                                        value: 'Đã huỷ',
                                        label: 'Quá hạn nộp',

                                    },

                                ]}
                            />
                        </Col>
                    </Row>
                </Form>

            </WrapperSearch>
            <Divider />

            <TitleComponent title={'Danh sách đơn hàng'}>
                <WrapperButton>
                    <Button disabled>Xác nhận</Button>
                    <Button disabled>Hoàn thành</Button>
                </WrapperButton>
            </TitleComponent>

            <ListOrder />
        </Wrapper>
    )
}

export default Order