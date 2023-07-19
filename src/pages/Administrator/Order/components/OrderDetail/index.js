import { Col, List, Modal, Row, Steps } from 'antd'
import React from 'react'
import TitleComponent from '../../../../../components/TitleComponent'
import { StepsStyled, WrapperBody, WrapperCheckout, WrapperProduct } from './styles'
import { UserOutlined } from '@ant-design/icons'
import OrderStep1 from '../../../../../common/images/order-step-1.svg'
import { ReactComponent as OrderStep1Icon } from '../../../../../common/images/order-step-1.svg'
import { ReactComponent as OrderStep2Icon } from '../../../../../common/images/order-step-2.svg'
import { ReactComponent as OrderStep3Icon } from '../../../../../common/images/order-step-3.svg'
import { ReactComponent as OrderStep4Icon } from '../../../../../common/images/order-step-4.svg'

const items = [
    {
        title: 'Chờ xác nhận',
        description: '16:00 16/08/2022',
        icon: <OrderStep1Icon />,
    },
    {
        title: 'Đang giao hàng',
        description: '16:00 16/08/2022',
        icon: <OrderStep2Icon />,
    },
    {
        title: 'Đã giao',
        description: '16:00 16/08/2022',
        icon: <OrderStep3Icon />,
    },
    {
        title: 'Đánh giá',
        icon: <OrderStep4Icon />,
    },
];
const data = [
    {
        AddressOrder: "hà đông",
        FullNameOrder: "Nguyễn văn A",
        IsReOrder: false,
        IsReview: false,
        ListOrderProductDetails: [
            {
                Image: "https://media.dthtayninh.xyz/1,321bd68f6c952f3e",
                ProductID: "00be1e39-4bbb-4921-9d00-761c1ec4bc81",
                ProductName: "nước thạch bích",
                Quantity: 4,
                SalePrice: 60000,
                TotalPrice: 60000,
            },

        ],
        ListStatusDetails: [
            {
                StatusOrder: 1,
                StatusOrderName: "Chờ xác nhận",
                CreateDate: "2022-11-24T10:28:49+07:00"
            },
            {
                StatusOrder: 2,
                StatusOrderName: "Đang giao",
                CreateDate: "2022-11-24T10:28:49+07:00"
            },
            {
                StatusOrder: 3,
                StatusOrderName: "Đã giao",
                CreateDate: "2022-11-24T10:28:49+07:00"
            },
        ],
        OrderID: "1",
        PaymentTypeName: "Thanh toán khi nhận hàng",
        PhoneNumberOrder: "0963049748",
        TotalPriceOrder: 60000,



    },
    {
        AddressOrder: "hà nội",
        FullNameOrder: "le van tuong",
        IsReOrder: false,
        IsReview: false,
        ListOrderProductDetails: [
            {
                Image: "https://media.dthtayninh.xyz/1,321bd68f6c952f3e",
                ProductID: "00be1e39-4bbb-4921-9d00-761c1ec4bc81",
                ProductName: "nước thạch bích",
                Quantity: 4,
                SalePrice: 60000,
                TotalPrice: 60000,
            },
            {
                Image: "https://media.dthtayninh.xyz/1,321bd68f6c952f3e",
                ProductID: "00be1e39-4bbb-4921-9d00-761c1ec4bc81",
                ProductName: "nước thạch bích",
                Quantity: 4,
                SalePrice: 60000,
                TotalPrice: 60000,
            },

        ],
        ListStatusDetails: [
            {
                StatusOrder: 1,
                StatusOrderName: "Chờ xác nhận",
                CreateDate: "2022-11-24T10:28:49+07:00"
            },
            {
                StatusOrder: 2,
                StatusOrderName: "Đang giao",
                CreateDate: "2022-11-24T10:28:49+07:00"
            },
            {
                StatusOrder: 3,
                StatusOrderName: "Đã giao",
                CreateDate: "2022-11-24T10:28:49+07:00"
            },
        ],
        OrderID: "2",
        PaymentTypeName: "Thanh toán khi nhận hàng",
        PhoneNumberOrder: "0963049748",
        TotalPriceOrder: 100000,



    },
]
const OrderDetail = ({ onCancel, visible, id }) => {
    const statusDetails = data[0].ListStatusDetails;
    const lastStatus = statusDetails.length > 0 ? statusDetails[statusDetails.length - 1] : null;
    const lastStatusName = lastStatus ? lastStatus.StatusOrderName : '';
    const products = data[0].ListOrderProductDetails;

    const totalPrice = products.reduce((acc, product) => acc + product.TotalPrice, 0);

    return (
        <Modal
            width={1200}
            title={<TitleComponent title={'Chi tiết đơn hàng'}></TitleComponent>}
            visible={visible}
            onCancel={onCancel}
            footer={null}
        >
            <WrapperBody>
                <List
                    dataSource={data.filter((item) => item.OrderID === id)}
                    renderItem={(item) => (
                        <>
                            <List.Item className='top-modal'>
                                <p>
                                    <span className='order-id'>ID đơn hàng: {item.OrderID}</span>
                                    <span>|</span>
                                    <span className='status'> {lastStatusName}</span>
                                </p>
                            </List.Item>
                            <List.Item className='procedure'>
                                <StepsStyled current={3} labelPlacement="vertical" items={items} />
                            </List.Item>
                            <List.Item className='wrapper-order-address'>
                                <Row style={{ width: '100%' }}>
                                    <Col span={16} className='order-address'>
                                        <p className='title'>Địa chỉ nhận hàng</p>
                                        <p>{item.FullNameOrder}</p>
                                        <p>{item.PhoneNumberOrder}</p>
                                        <p>{item.AddressOrder}</p>
                                    </Col>
                                    <Col span={8}>
                                        <Steps
                                            progressDot
                                            current={0}
                                            direction="vertical"
                                            items={[
                                                {
                                                    title: '16:00 18/08/2022',
                                                    description: 'Giao hàng thành công',
                                                },
                                                {
                                                    title: '16:00 17/08/2022',
                                                    description: 'Đang giao hàng',
                                                },
                                                {
                                                    title: '16:00 16/08/2022',
                                                    description: 'Chờ xác nhận',
                                                },
                                            ]}
                                        />
                                    </Col>
                                </Row>
                            </List.Item>
                            <List.Item className='wrapper-product'>
                                <Row style={{ width: '100%' }}>
                                    <Col span={16} className=''>
                                        <p className='title'>Sản phẩm</p>
                                        {products.map((product, index) => (
                                            <WrapperProduct>
                                                <img src={require('../../../../../common/images/sanpham-1.png')} />
                                                <div>
                                                    <p className='product-name'>{product.ProductName}</p>
                                                    <p className='quantity'>x <span>{product.Quantity}</span></p>
                                                    <p className='price'>{product.TotalPrice}<span className='underline'>đ</span></p>
                                                    <p className='sale-price'>{product.SalePrice}<span className='underline'>đ</span></p>
                                                </div>
                                            </WrapperProduct>


                                        ))}
                                    </Col>
                                    <Col span={8}>
                                        <WrapperCheckout>
                                            <div className='checkout-item'>
                                                <p className='title'>Tạm tính ({products.length} sản phẩm)</p>
                                                <p>{totalPrice}<span className='underline'>đ</span></p>

                                            </div>
                                            <div className='checkout-item'>
                                                <p className='title'>Phí vận chuyển</p>
                                                <p>0 <span className='underline'>đ</span></p>

                                            </div>
                                            <div className='checkout-item'>
                                                <p className='title'>Tổng cộng</p>
                                                <p className='total'>{totalPrice}<span className='underline'>đ</span></p>

                                            </div>
                                            <div className='checkout-item'>
                                                <p className='title'>Phương thức thanh toán</p>
                                                <p>{item.PaymentTypeName}</p>

                                            </div>
                                        </WrapperCheckout>
                                    </Col>
                                </Row>
                            </List.Item>
                        </>
                    )}
                />
            </WrapperBody>
        </Modal>
    )
}

export default OrderDetail